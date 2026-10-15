package com.laboratoryproject.controller;

import com.laboratoryproject.model.Material;
import com.laboratoryproject.service.MaterialService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/machines")
public class LabController {
  private final MaterialService materialService;

  public LabController(MaterialService materialService) {
    this.materialService = materialService;
  }

  @GetMapping
  public List<Material> getMaterials() {
    return materialService.getMaterials();
  }

  @PostMapping
  public Material addMaterial(@RequestBody Material material) {
    return materialService.addMaterial(material);
  }
}
