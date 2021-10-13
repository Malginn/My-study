#include <iostream>
#include <cmath>      //e = m_e; pi = m+pi
using namespace std;


int main(){
    double x, a, b, y;
    cout<<"Enter x, a, b\n";
    cin >> x >> a >> b;
    y = exp(abs(a))*(a+1/sin(x))*sqrt(a+b);
    cout << "y = " <<y;




}
