#include <iostream>
#include <cmath>
#include <tgmath.h>

using namespace std;

int main()
{
    int v, t, y;
    
    cout<<"Введите скорость, время полета\n";
    cin >> v >> t;
    
    double x = (9.81*t)/(2*v);
    cout <<"угол равен = " << asin(x) <<endl;

    return 0;
}