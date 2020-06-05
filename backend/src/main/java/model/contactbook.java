package model;

import java.sql.Date;
import javax.persistence.*;


@Entity
@Table(name="contacts")
public class contactbook {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="u_id")
    private int id;
    @Column(name="u_name")
    private String name;
    @Column(name="u_birth")
    private Date birth;
    @Column(name="u_con_primary")
    private String conP;
    @Column(name="u_email_primary")
    private String emailP;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    public String getConP() {
        return conP;
    }

    public void setConP(String conP) {
        this.conP = conP;
    }

    public String getEmailP() {
        return emailP;
    }

    public void setEmailP(String emailP) {
        this.emailP = emailP;
    }


    @Override
    public String toString() {
        return "contactbook{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", birth=" + birth +
                ", conP='" + conP + '\'' +
                ", emailP='" + emailP + '\'' +
                '}';
    }
}
