//найти произведение значения, целая часть которых %2 вывести их произведение a,b отрезок n- количксвто точек
#include <iostream>
#include <cmath>
#include <math.h>

using namespace std;

int main()
{
    // int с;
    double n, x, a, b, y, mul;
    mul = 1;
    x = (x * M_PI) / 180;
    cout << "Enter a, b, n\n";
    cin >> a >> b >> n;

    n = (b - a) / (n - 1);
    cout << n << endl;

    for (a; a <= b; a += n) {
        x = a;
        y = 5 * exp(-0.5 * x) * sin(M_PI * x);
        cout << "y(" << x << ")= " << y << endl;

        int c = floor(y);
        if (c % 2) {
            mul = mul * y;
        }

    }
    cout << "mul= " << mul << endl;
}

