import { LightningElement, wire } from 'lwc';
import  getAccountRecordss  from '@salesforce/apex/data3.getAccountRecordss';


export default class DataTable extends LightningElement {

    colums =[
        {label:'Name',fieldName:'Name'},
        {label:'Phone',fieldName:'Phone'}
    ]

    accInfo;
    @wire(getAccountRecordss) accounts({data,error}){
        if(data){
            this.accInfo = data;
        }
        else if(error){
            this.error = error;
        }
    }
}