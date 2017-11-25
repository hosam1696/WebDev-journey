#include <stdio.h>
#include <cs50.h>

int main(void) {
    int n;
    do
    {
        printf("Numbers of peaople in this Room are\n");
        n = GetInt();
    }
    while(n<1) ;
        int ages[n];
        for (int i =0;i<n ; i++) {
            printf("Age of Person %d\n", i+1);
            ages[i]= GetInt();
        }
        for(int i = 0;i<n;i++) {
            printf("The Year Of birth #%d is: %d\n", i+1, 2016-ages[i]);
        }
    
    
    
}