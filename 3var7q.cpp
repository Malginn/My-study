#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int n, i;
    cout<<"Enter n\n";
    cin >> n;
    double mas[n];
    cout << "Enter a\n";
    int max = -2147483647;
    for(i = 1; i<=n; i++){
        cin >> mas[i];
        if((mas[i] > max)&&(mas[i] <=0)){
            max = mas[i];
        }
    }
    cout << "Max= " << max;
}
