
#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    double x, num, s;
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
    cout << "Чисел в файле : " <<Count << endl;
    input.close();
    
    float *mass = new float[Count];
    ifstream file("numbers.txt");
    for(int i=0; i<Count; i++) {
    file>>mass[i];
    cout<<mass[i]<<endl;
    last = i;
    }
    cout << "Sum= " << mass[0]+mass[last];


    delete []  mass;
    return 0;
}
