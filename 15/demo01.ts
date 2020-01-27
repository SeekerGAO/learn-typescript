namespace china{
    export class Gao{
        public name:string = 'gcr';
        talk():void{
            console.log('中国的gcr');
        }
    }
}

namespace usa{
    export class Gao{
        public name:string = 'gcr';
        talk():void{
            console.log('美国的gcr');
        }
    }
}

let gao1:china.Gao = new china.Gao();
let gao2:usa.Gao = new usa.Gao();
gao1.talk();
gao2.talk();