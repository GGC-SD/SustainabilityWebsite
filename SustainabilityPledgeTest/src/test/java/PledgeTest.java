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

    @Test
    public void testSite() throws InterruptedException{
        driver.get("localhost:4200/login");
        WebElement email = driver.findElement(By.id("email"));
        WebElement pwd = driver.findElement(By.id("pwd"));
        WebElement signUp = driver.findElement(By.xpath("/html/body/app-root/app-choose-username/div[2]/div/div/div/button[2]"));
        WebElement login = driver.findElement(By.xpath("/html/body/app-root/app-choose-username/div[2]/div/div/div/button[1]"));
        Thread.sleep(2000);
        email.sendKeys("LearningIsCool");
        Thread.sleep(3000);
        email.clear();
        email.sendKeys("dgomez3@ggc.edu");
        Thread.sleep(2000);
        pwd.sendKeys("pass123");
        Thread.sleep(3000);
        pwd.clear();
        pwd.sendKeys("pass1234");
        Thread.sleep(2000);
        signUp.click();
        Thread.sleep(3000);
        email.sendKeys("den.gomez12@gmail.com");
        pwd.sendKeys("pass1234");
        Thread.sleep(4000);
        signUp.click();
        Thread.sleep(4000);
        driver.get("localhost:4200/login");
        Thread.sleep(3000);
        try {
            WebElement logout = driver.findElement(By.xpath("/html/body/app-root/app-choose-username/div[2]/div/div/button"));
            logout.click();
        } catch(org.openqa.selenium.StaleElementReferenceException e){
            WebElement logout = driver.findElement(By.xpath("/html/body/app-root/app-choose-username/div[2]/div/div/button"));
            logout.click();
        }
        Thread.sleep(2000);
        WebElement email2 = driver.findElement(By.id("email"));
        WebElement pwd2 = driver.findElement(By.id("pwd"));
        email2.sendKeys("den.gomez12@gmail.com");
        Thread.sleep(2000);
        pwd2.sendKeys("pass1234");
        Thread.sleep(2000);
        driver.findElement(By.xpath("/html/body/app-root/app-choose-username/div[2]/div/div/div/button[1]")).click();
        Thread.sleep(4000);
        driver.findElement(By.id("dropdownMenuButton")).click();
        Thread.sleep(1000);
        //ENVIRONMENTAL CLUBS
        driver.findElement(By.xpath("/html/body/app-root/app-home/nav/div[1]/div/a[1]")).click();
        ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs2.get(1));
        driver.close();
        driver.switchTo().window(tabs2.get(0));
        Thread.sleep(2000);
        //GGC EARTH DAY
        driver.findElement(By.id("dropdownMenuButton")).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath("/html/body/app-root/app-home/nav/div[1]/div/a[2]")).click();
        ArrayList<String> tabs3 = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs3.get(1));
        driver.close();
        driver.switchTo().window(tabs3.get(0));
        Thread.sleep(2000);
        driver.findElement(By.id("bigButton")).click();
        Thread.sleep(3000);
        //WATER
        driver.findElement(By.id("waterYes")).click();
        Thread.sleep(500);
        driver.findElement(By.id("waterNo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("waterDo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("waterYes2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("waterNo2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("waterDo2")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-water/div[2]/button")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-electricity/div[2]/button[1]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-water/div[2]/button")).click();
        Thread.sleep(500);
        //ELECTRICITY
        driver.findElement(By.id("eYes")).click();
        Thread.sleep(500);
        driver.findElement(By.id("eNo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("eDo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("eYes2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("eNo2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("eDo2")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-electricity/div[2]/button[2]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-food/div[2]/button[1]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-electricity/div[2]/button[2]")).click();
        driver.findElement(By.id("fYes")).click();
        //FOOD
        Thread.sleep(500);
        driver.findElement(By.id("fNo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("fDo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("fYes2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("fNo2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("fDo2")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-food/div[2]/button[2]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-recycling/div[2]/button[1]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-food/div[2]/button[2]")).click();
        Thread.sleep(500);
        //RECYCLING
        driver.findElement(By.id("rYes")).click();
        Thread.sleep(500);
        driver.findElement(By.id("rNo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("rDo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("rYes2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("rNo2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("rDo2")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-recycling/div[2]/button[2]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-transportation/div[2]/button[1]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-recycling/div[2]/button[2]")).click();
        Thread.sleep(500);
        //TRANSPORTATION
        driver.findElement(By.id("tYes")).click();
        Thread.sleep(500);
        driver.findElement(By.id("tNo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("tDo")).click();
        Thread.sleep(500);
        driver.findElement(By.id("tYes2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("tNo2")).click();
        Thread.sleep(500);
        driver.findElement(By.id("tDo2")).click();
        Thread.sleep(500);
        // SUBMIT FORM HERE

        //NAV TABS
        driver.findElement(By.xpath("/html/body/app-root/app-transportation/nav/div/a[1]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-water/nav/div/a[2]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-electricity/nav/div/a[3]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-food/nav/div/a[4]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-recycling/nav/div/a[5]")).click();
        Thread.sleep(500);
        driver.findElement(By.xpath("/html/body/app-root/app-transportation/nav/div/a[5]")).click();
        Thread.sleep(500);
//        driver.findElement(By.xpath("/html/body/app-root/app-home/button")).click();
        //LOGOUT NAV BUTTON (NOT WORKING ATM)
//        Thread.sleep(500);
//        driver.findElement(By.xpath("/html/body/app-root/app-water/nav/div/a[7]")).click();

    }

}
