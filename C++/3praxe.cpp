#include <iostream>     //библиотека ввода вывода
#include <cmath>        //нужно обязательно подключить библиотеку эту чтобы писать мат. функции
using namespace std;


int main()  //внтутри { выполнаяется вся программа}
{
    double y ;   //переменная может быть иррац числом
	int x, a, b ;  //целочисленные
	cout << "print x,a,b\n";         //вывод на экран
	cin >> x >> a >> b;                //ввод с клавиатуры
	//y = (a + b)* (exp(1.0)* tan(x);
	y = (a + b)* 1/(exp(-1.0))* tan(x);  //внимание на написание функций tan and exp
	cout << y;

  system ("pause");     //чтобы окно не закрывалось
  return 0;
}
