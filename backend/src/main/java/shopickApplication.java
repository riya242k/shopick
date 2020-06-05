import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;


@SpringBootApplication
@ServletComponentScan
class shopickApplication {
    public static void main(String ...x){
        SpringApplication.run(shopickApplication.class,x);
//        try{
//            Class.forName("com.mysql.jdbc.Driver");
//
//            String url = "jdbc:mysql://localhost:3306/phonebook";
//            String uname = "root";
//            String pwd = "root";
//
//            Connection con = DriverManager.getConnection(url,uname,pwd);
//
//            Statement stmt = con.createStatement();
//
//            String q = "select * from contacts";
//
//            ResultSet rs = stmt.executeQuery(q);
//
//            while(rs.next()) {
//                System.out.println("id:" + rs.getString(1)
//                        + "\nName: " + rs.getString(2)
//                        + "\nBirth:" + rs.getDate(3)
//                        + "\nMobile:" + rs.getString(4)
//                        + "\nEmail:" + rs.getString(5));
//            }
//        }
//        catch(Exception e){
//            System.out.print("exception occured:"+e);
//        }
    }
}
