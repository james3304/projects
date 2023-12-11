import { createOrbitDB, IPFSAccessController } from '@orbitdb/core'
import { create } from 'ipfs-core'

const main = async () => {
  // create a random directory to avoid IPFS and OrbitDB conflicts.
  let randDir = (Math.random() + 1).toString(36).substring(2)

  const config = {
    Addresses: {
      API: '/ip4/127.0.0.1/tcp/0',
      Swarm: ['/ip4/0.0.0.0/tcp/0'],
      Gateway: '/ip4/0.0.0.0/tcp/0'
    }
  }
  
  // This will create an IPFS repo in ./[randDir]/ipfs.
  const ipfs = await create({ config, repo: './' + randDir + '/ipfs'})

  // This will create all OrbitDB-related databases (keystore, my-db, etc) in 
  // ./[randDir]/ipfs.
  const orbitdb = await createOrbitDB({ ipfs, directory: './' + randDir + '/orbitdb' })

  let db

  if (process.argv[2]) {
    db = await orbitdb.open(process.argv[2])
  } else {
    // When we open a new database, write access is only available to the 
    // db creator. When replicating a database on a remote peer, the remote 
    // peer must also have write access. Here, we are simply allowing anyone 
    // to write to the database. A more robust solution would use the 
    // OrbitDBAccessController to provide "fine-grain" access using grant and 
    // revoke. 
    db = await orbitdb.open('my-db', { AccessController: IPFSAccessController({ write: ['*']})})
  }

  // Copy this output if you want to connect a peer to another.
  console.log('my-db address', db.address)

  // Add some records to the db when another peers joins.
  db.events.on('join', async (peerId, heads) => {
    await db.add('hello world 1')
    await db.add('hello world 2')
  })

  db.events.on('update', async (entry) => {
    console.log('entry', entry)
    
    // To complete full replication, fetch all the records from the other peer.
    await db.all()
  })

  // Clean up when stopping this app using ctrl+c
  process.on('SIGINT', async () => {
      // Close your db and stop OrbitDB and IPFS.
      await db.close()
      await orbitdb.stop()
      await ipfs.stop()

      process.exit()
  })
}

main()