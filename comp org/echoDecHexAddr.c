/* echoDecHex.c
 * Asks user to enter an unsigned integer in decimal and
 * one in hexadecimal then echoes both in both bases.
 * 2017-09-29: Bob Plantz
 */

#include <stdio.h>

int main(void) {
    unsigned int unsignedInteger;
    unsigned int bitPattern;

    printf("Enter an unsigned decimal integer: ");
    scanf("%u", &unsignedInteger);

    printf("Enter a bit pattern in hexadecimal: ");
    scanf("%x", &bitPattern);

    // printf("%u is stored as %#010xn", unsignedInteger, unsignedInteger);
    printf("%u is stored as %#010x at address %p\n", unsignedInteger, unsignedInteger, &unsignedInteger);

    // printf("%#010x represents the unsigned decimal integer %u\n", bitPattern, bitPattern);
    printf("%#010x represents the unsigned decimal integer %u stored at address %p\n", bitPattern, bitPattern, &bitPattern);

    return 0;
}