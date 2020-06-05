package service;

import model.contactbook;

import java.util.List;

public interface contactbookService {

    List<contactbook> get();

    contactbook get(int id);

    void save(contactbook connook);

    void delete(int id);
}
