#include <iostream>
#include <cmath>      //e = m_e; pi = m+pi
using namespace std;


int main(){
    double x, a, b;
    cout <<"Enter x, a, b\n";
    cin >> x >> a >> b;
    if(1<x && x<3){
        cout << x <<endl ;
    }else cout << x << " Не подходит\n";
    if(1<a && a<3){
        cout << a <<endl ;
    }else cout << a << " Не подходит\n";
    if(1<b && b<3){
        cout << b  <<endl;
    }else cout << b << " Не подходит\n";



}
