#include <iostream>
#include <fstream>
#include <cmath>

using namespace std;

int main()
{
    double x, num, s, SumSq;
    int n, last;
    
    ofstream fout;
    fout.open("numbers.txt");
    
    cout << "Enter count\n";
    cin >> n;
    cout <<"Input...\n";
    for(int i=0;i<n;i++){
        cin >> x;
        fout << x <<endl;
        x = 0;
    }
    
    
    ifstream input("numbers.txt");
    float ch;
    int Count = 0;
    while (input >> ch)
            Count++;
    input.close();
    
    float *mass = new float[Count];
    ifstream file("numbers.txt");
    for(int i=0; i<Count; i++) {
    file>>mass[i];
    cout<<mass[i]<<endl;
    
    if(mass[i] < 0){
        SumSq = SumSq + pow(mass[i], 2);
    }
    }
    cout << "SumSq= " << SumSq << endl;


    delete []  mass;
    return 0;
}