#include <iostream>
#include <cstring>
#include <string.h>
#include <conio.h>

using namespace std;

struct Product{
    string name;
    int date;
    double price;
    int count;
};

int main()
{
        string findName;
        int s,n,non = 0,k=-1;
        int arr[30];
    
    cout<<"Enter count\n";
    cin >> n; //количесвто товара
    
    Product st[30]; //описан массив структур
    for(int i=0;i<=n-1;i++){
        cout << "Enter name: "; cin >> st[i].name;
        cout << "Enter date: ";   cin >> st[i].date;
        cout << "Enter price: "; cin >> st[i].price;
        cout << "Enter count: "; cin >> st[i].count;
        
    };
    cout << "Enter name for found\n";
    cin >> findName;
    for(int i=0;i<=n;i++){
        if(findName == st[i].name) { //если обе строки одиноквые => значение 0
        s+=st[i].price * st[i].count;
        arr[non]=i;
        non++;
        k=i;
        };
    }
    
    if(k==-1) cout <<"Product was not found\n";
        else for(int i=0;i<non;i++){
            k=arr[i];
               cout << "name: " << st[k].name <<"\n"
                    << "date: "<< st[k].date <<"\n"
                    << "price: " <<st[k].price <<"\n"
                    << "count: " <<st[k].count <<"\n"
                    << "Sum: " << s <<endl <<endl;
        }
    getch();
    
    return 0;
}
