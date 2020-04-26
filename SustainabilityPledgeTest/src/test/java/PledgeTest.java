import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.ArrayList;

public class PledgeTest {
    private static WebDriver driver;

    @BeforeClass
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        driver = new ChromeDriver();
    }
//Sleep to be able to record test and describe what's happening
    @Test
    public void testSite() throws InterruptedException{
        driver.get("localhost:4200/login");
        WebElement email = driver.findElement(By.id("email"));
        WebElement pwd = driver.findElement(By.id("pwd"));
        WebElement signUp = driver.findElement(By.id("signUp"));
        Thread.sleep(2000);
        //Test email regex works
        email.sendKeys("LearningIsCool");
        Thread.sleep(3000);
        email.clear();
        //Test sign up with existing account and password regex
        email.sendKeys("dgomez3@ggc.edu");
        Thread.sleep(2000);
        pwd.sendKeys("pass123");
        Thread.sleep(3000);
        pwd.clear();
        pwd.sendKeys("pass1234");
        Thread.sleep(2000);
        signUp.click();
        Thread.sleep(3000);
        //Test signup works with new email
        email.sendKeys("den.gomez12@gmail.com");
        pwd.sendKeys("pass1234");
        Thread.sleep(4000);
        signUp.click();
        Thread.sleep(4000);
        //logout
        driver.findElement(By.xpath("/html/body/app-root/app-home/nav/button[2]")).click(); //logout btn
        Thread.sleep(3000);
        driver.findElement(By.xpath("/html/body/app-root/app-choose-username/div[3]/div/div/button[1]")).click(); //confirm logout
        Thread.sleep(2000);
        //login with newly created account
        WebElement email2 = driver.findElement(By.id("email"));
        WebElement pwd2 = driver.findElement(By.id("pwd"));
        email2.sendKeys("den.gomez12@gmail.com");
        Thread.sleep(2000);
        pwd2.sendKeys("pass1234");
        Thread.sleep(2000);
        driver.findElement(By.id("login")).click(); //login btn
        Thread.sleep(4000);

        //Test all buttons on home page
        driver.findElement(By.id("getInvolved")).click(); //drop down menu btn
        Thread.sleep(1000);
        //environmental clubs & events link opens new tab
        driver.findElement(By.id("environmentalClub")).click(); //club & events btn
        ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs2.get(1));
        driver.close();
        driver.switchTo().window(tabs2.get(0));
        Thread.sleep(2000);
        //GGC earth day link opens new tab
        driver.findElement(By.id("getInvolved")).click(); //drop down menu btn
        Thread.sleep(1000);
        driver.findElement(By.id("earthDay")).click(); //ggc earth day btn
        ArrayList<String> tabs3 = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs3.get(1));
        driver.close();
        driver.switchTo().window(tabs3.get(0));
        Thread.sleep(2000);
        //About us
        driver.findElement(By.id("about")).click(); //about us btn
        Thread.sleep(1000);
        driver.findElement(By.id("aboutHomeBtn")).click(); //back to home

        //start pledge
        driver.findElement(By.id("bigButton")).click(); //start the pledge btn
        Thread.sleep(3000);

        //test top bar
        driver.findElement(By.xpath("/html/body/app-root/app-water/app-top-bar/nav/div/a[2]")).click(); //electricity btn
        driver.findElement(By.xpath("/html/body/app-root/app-electricity/app-top-bar/nav/div/a[3]")).click(); //food btn
        driver.findElement(By.xpath("/html/body/app-root/app-food/app-top-bar/nav/div/a[4]")).click(); //recycling btn
        driver.findElement(By.xpath("/html/body/app-root/app-recycling/app-top-bar/nav/div/a[5]")).click(); //transportation btn
        driver.findElement(By.xpath("/html/body/app-root/app-transportation/app-top-bar/nav/div/a[1]")).click(); //water btn
        Thread.sleep(500);
        //FAQ btn
        driver.findElement(By.id("faq")).click();
        Thread.sleep(500);
        driver.findElement(By.id("faqHome")).click();
        Thread.sleep(500);

        //WATER
        int numberOfWaterQuestions = 4; //update if questions are added to JSON
        for(int i=1; i <= numberOfWaterQuestions; i++){
            for(int j=1; j <= 3; j++){
                driver.findElement(By.xpath("/html/body/app-root/app-water/div["+i+"]/section/div["+j+"]/label")).click();
                Thread.sleep(500);
            }
        }
        driver.findElement(By.xpath("/html/body/app-root/app-water/div[5]/div[2]/button")).click(); //next btn to electricity
        Thread.sleep(1000);

        //ELECTRICITY
        int numberOfElectricityQuestions = 4; //update if questions are added to JSON
        for(int i=1; i <= numberOfElectricityQuestions; i++){
            for(int j=1; j <= 3; j++){
                driver.findElement(By.xpath("/html/body/app-root/app-electricity/div["+i+"]/section/div["+j+"]/label")).click();
                Thread.sleep(500);
            }
        }
        driver.findElement(By.xpath("/html/body/app-root/app-electricity/div[5]/div[2]/button[2]")).click(); //next btn to food
        Thread.sleep(1000);

        //FOOD
        int numberOfFoodQuestions = 6; //update if questions are added to JSON
        for(int i=1; i <= numberOfFoodQuestions; i++){
            for(int j=1; j <= 3; j++){
                driver.findElement(By.xpath("/html/body/app-root/app-food/div["+i+"]/section/div["+j+"]/label")).click();
                Thread.sleep(500);
            }
        }
        driver.findElement(By.xpath("/html/body/app-root/app-food/div[7]/div[2]/button[2]")).click(); //next btn to recycling
        Thread.sleep(1000);

        //RECYCLING
        int numberOfRecyclingQuestions = 4; //update if questions are added to JSON
        for(int i=1; i <= numberOfRecyclingQuestions; i++){
            for(int j=1; j <= 3; j++){
                driver.findElement(By.xpath("/html/body/app-root/app-recycling/div["+i+"]/section/div["+j+"]/label")).click();
                Thread.sleep(500);
            }
        }
        driver.findElement(By.xpath("/html/body/app-root/app-recycling/div[5]/div[2]/button[2]")).click(); //next btn to transportation
        Thread.sleep(1000);

        //TRANSPORTATION
        int numberOfTransportationQuestions = 4; //update if questions are added to JSON
        for(int i=1; i <= numberOfTransportationQuestions; i++){
            for(int j=1; j <= 3; j++){
                driver.findElement(By.xpath("/html/body/app-root/app-transportation/div["+i+"]/section/div["+j+"]/label")).click();
                Thread.sleep(500);
            }
        }
        driver.findElement(By.xpath("/html/body/app-root/app-transportation/div[5]/div[2]/button[2]")).click(); //submit btn
        Thread.sleep(1000);
    }

}
