.syntax unified
    .align 2

    .section    .rodata
outputMax:
    .ascii "max = %d\012\000"
outputMin:
    .ascii "min = %d\012\000"
outputSum:
    .ascii "sum = %d\012\000"

    .text
    .global main
    .type main, %function

main:
    push {fp, lr}
    add fp, sp, #4

    sub sp, sp, #24

    mov r0, #25
    str r0, [fp, #-8]

    mov r0, #100
    str r0, [fp, #-12]

    mov r0, #50
    str r0, [fp, #-16]

    mov r0, #75
    str r0, [fp, #-20]

    mov r1, #4          //r1 <- count of 'elements' of array
    sub r0, fp, #20     // r0 <- 'address' of array
    bl printArray

    mov r1, #4          //r1 <- count of 'elements' of array
    sub r0, fp, #20     //r0 <- 'address' of array
    bl doubleValues


    sub r0, fp, #20 //i think
    bl printArray

    // print value of max element
    mov r1, #4
    sub r0, fp, #20
    bl maxArray

    //print max value
    mov r1, r0
    ldr r0, =outputMax
    bl printf

    // get value of min element
    mov r1, #4
    sub r0, fp, #20
    bl minArray

    //print min value
    mov r1, r0
    ldr r0, =outputMin
    bl printf

    mov r1, #4
    sub r0, fp, #20
    bl sumArray

    mov r1, r0
    ldr r0, =outputsum
    bl printf

    add sp, sp, #24

    sub sp, fp, #4
    pop {fp, lr}
    bx lr