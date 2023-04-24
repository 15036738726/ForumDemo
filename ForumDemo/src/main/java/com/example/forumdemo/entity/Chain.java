package com.example.forumdemo.entity;

/**
 * 打包链模型  这个暂时没有用到 2023-04-24
 */
public class Chain<T> {
    private T data;
    private Chain next;

    public Chain(T data){
        this.data = data;
    }
    public Chain(){

    }
    public void setData(T data){
         this.data = data;
    }
    public T getData(){
        return this.data;
    }

    public void setNext(Chain next){
        this.next = next;
    }

    public Chain getNext(){
        return this.next;
    }

}
