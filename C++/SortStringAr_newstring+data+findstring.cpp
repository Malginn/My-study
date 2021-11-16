#include <iostream>
using namespace std;
//сортировка строкового массива + поиск строки
int main()
{
string* AS;
int count;
string s;
char buf[80];

cout << "count = ";
cin >> count;

if (count <= 0) {
cout << "Incorrect input.";
return 0;
}

AS = new string[count];

cout << "Enter strings:\n";
cin.ignore(4096, '\n');

for (int i = 0; i < count; i++) {
cout << "=> ";
cin.getline(buf, 80, '\n');
AS[i] = buf;

}

cout << "\nArray AS:" << ::endl;
for (int i = 0; i < count; i++)
cout << "A[" << i << "] = " << AS[i] << ::endl;

for (int i = 0; i < count - 1; i++)
for (int j = i; j >= 0; j--)
if (AS[j] > AS[j + 1])
{
s = AS[j];
AS[j] = AS[j + 1];
AS[j + 1] = s;
}
cout << "\nSorted array AS:" << endl;
for (int i = 0; i < count; i++)
cout << "A[" << i << "] = " << AS[i] << endl;

string str;
cout << "Enter string to find\n";
cin >> str;
char finded;

for(int i = 0;i<=count;i++){
    if(AS[i] == str){
        finded = 'y';
        cout <<" the string was found: " <<str <<endl;
    }
}
if(finded != 'y'){
    cout <<"The string was not been find";
}

delete[] AS;

return 0;
}