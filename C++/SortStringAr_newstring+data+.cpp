#include <iostream>
#include <ctime>
#include <cstdlib>
#include <iomanip>

using namespace std;
int compare (const void *a, const void *b) { 
    return *(int *)a - *(int *)b;
      //сравнение
}
int compareReverse (const void *a, const void *b) { 
    return *(int *)b - *(int *)a;
      //сравнение
}

int main() {
    int n, m;
    cout << "enter n, m\n";
    cin >> n >> m;
    int arr[n][m];
    int i, j;
    cout << "Исходный массив: " << endl;
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            arr[i][j] = -10 + rand() % 20; //rand() 0-32767(число будет (0:19) -10 )
            cout  <<' '<< arr[i][j] << ' ';
        }
        cout << endl;
    }

    for (i = 0; i < n; i++)
        if (i % 2 == 0) {
            // первыйЭл  размер  байты   сравнение
            qsort(arr[i], m, sizeof(int), compareReverse);
        }
        else {
            qsort(arr[i], m, sizeof(int), compare);
        }

        cout << "Отсортированный массив: " << endl;

        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++) {
                cout << ' ' << arr[i][j]<<' ';
            }
            cout << endl;
        }
}