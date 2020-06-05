package dao;

import model.contactbook;

import java.util.List;

public interface contactbookDAO {
    List<contactbook> get();

    contactbook get(int id);

    void save(contactbook connook);

    void delete(int id);

}
