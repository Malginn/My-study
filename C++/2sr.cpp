
#include <iostream>
#include <cmath>
#include <tgmath.h>
#include <cstdlib>
#include <time.h>

using namespace std;

int main()
{
    
    int a, b;
    cout<<"Введите числовой диапазон  \n";
    cin >> a >> b;
    srand (time(0)); //нужно для случайного числа
    cout << a + rand()%(b-a+1);;
    return 0;
}
