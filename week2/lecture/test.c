#include <cs50.h>
#include <stdio.h>

int main(void) {
    printf("enter your number\n");
    int q = GetInt();
    printf("You have entered %d\n", q);
    for (int i =65;i<65+26;i++) {
        printf("%i is %c\n", i,(char) i);
    } 
}