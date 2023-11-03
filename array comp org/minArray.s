.syntax unified //i think
    .text
    .align 2

    .global maxArray
    .type maxArray, %function

maxArray:
    push {fp, lr}
    add fp, sp, #4

    mov r2, r0      //array 'pointer'
    sub r1, r1, #1  // 
    ldr r0, [r0]

topOfLoop:
    add r2, r2, #4
    ldr r3, [r2]
    cmp r3, r0
    movlt r0, r3

    sub r1, r1, #1  //  ( i think )
    cmp r1, #0      // we change these 
    bgt topOfLoop   // 3 lines for each
    //might need to be blt

    //porlogue
    sub sp, fp, #4
    pop {fp, lr}
    bx lr