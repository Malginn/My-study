
#include <iostream>
#include <cmath>
#include <tgmath.h>
#include <cstdlib>
#include <time.h>

using namespace std;

int main()
{
    
    int a, b,c,d;
    cout<<"Введите число \n";
    cin >> a;
        b = a % 10;
        c = a /10 %10;
        d = a /100 %10;
        if ((b == c)||(b == d)||(c == d)){
            cout <<"Одинаковые цифры есть\n";
        }else{
            cout <<"Одинаковых цифр нет\n" << b<<c<<d<<endl;
        }
}
