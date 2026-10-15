package com.laboratoryproject.service;

import com.laboratoryproject.model.Material;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MaterialService {
  
  private final List<Material> materials = new ArrayList<>();

  public MaterialService() {
    materials.add(new Material(1, "Taq Polymerase", 13));
    materials.add(new Material(2, "Blood Samples", 9));
    materials.add(new Material(3, "Urine Samples", 3));
  }

  public List<Material> getMaterials(){
    return materials;
  }

  public Material addMaterial(Material material) {
    material.setID(materials.size() + 1);
    materials.add(material);

    return material;
  }
}
