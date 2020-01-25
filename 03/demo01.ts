// Undefined 类型
var userName: string;
console.log(userName);

// Number 类型
var age: number = 20;
var stature: number = 156.39;
console.log(age);
console.log(stature);

// string 类型
var contactName: string = 'gao';
console.log(contactName);

// boolean类型
var isTrue: boolean = true;
var isFalse: boolean = false;

// enum类型
enum Human {
    male = '男性',
    female = '女性',
    towelhead = '双性'
}
console.log(Human.female);

// any类型
var atWill:any = 20;
atWill = 'gao';
atWill = true;
console.log(atWill);
