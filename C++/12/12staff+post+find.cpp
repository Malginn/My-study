#include <iostream>
#include <cstring>
#include <string.h>
#include <conio.h>
#include <time.h>

using namespace std;

struct staff{
    string lastname;
    char gender;
    string department;
    int year;
    int experience;
    string post;
};

int main()
{
        string departmentName;
        int s,n,non = 0,k=-1;
        int arr[30], sum = 0, count = 0, today;
    
    cout<<"Enter count\n";
    cin >> n; //количесвто сотрудников
    cout << "Enter today's year\n";
    cin >> today;
    
    staff st[30]; //описан массив структур
    for(int i=0;i<=n-1;i++){
        cout << "Enter lastname: "; cin >> st[i].lastname;
        cout << "Enter gender: ";   cin >> st[i].gender;    //M or F
        cout << "Enter department: "; cin >> st[i].department;
        cout << "Enter year: "; cin >> st[i].year;
        cout << "Enter experience: "; cin >> st[i].experience;
        cout << "Enter post: "; cin >> st[i].post;
    };
    cout << "Enter department for found\n";
    cin >> departmentName;
    for(int i=0;i<=n;i++){
        if (st[i].department == departmentName ){
           sum = sum + st[i].experience;
           count++;
        };
    }
    cout << "Experience of " <<departmentName<< " department employees: " << sum/count<< "\n" <<endl;
    cout << "Employees of retirement age: \n";
    
    for(int i=0;i<=n-1;i++){
        if(st[i].gender = 'M'){
            if(today - st[i].year >= 65){
                cout <<  "Enter lastname: " << st[i].lastname <<endl;
                cout <<  "Enter experience: " << st[i].experience <<endl;
                cout <<  "Enter post: " << st[i].post << "\n" <<endl;
            } 
            } else{
                if(st[i].gender = 'F'){
                    if(today = st[i].year >=60)
                    cout <<  "Enter lastname: " << st[i].lastname <<endl;
                    cout <<  "Enter experience: " << st[i].experience <<endl;
                    cout <<  "Enter post: " << st[i].post << "\n" <<endl;
                }
        }
    }
    getch();
    
    return 0;
}