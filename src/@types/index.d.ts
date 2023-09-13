export interface Task {
  id: number;
  name: string;
  status: boolean;
}

export interface Wallet {

id:number
  userId: number;
  name: string;
  icon: string;
}

export interface NewWallet {

  
    userId: number;
    name: string;
    icon: string;
  }