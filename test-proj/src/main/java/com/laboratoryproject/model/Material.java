package com.laboratoryproject.model;

public class Material {
  private int id;
  private String name;
  private int quantity;

  public Material(){

  }
  
  public Material(int id, String name, int quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  public int getID(){
    return id;
  }

  public void setID(int id){
    this.id = id;
  }

  public String getName(){
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getQuantity(){
    return quantity;
  }

  public void setQuantity(int quantity){
    this.quantity = quantity;
  }
}
