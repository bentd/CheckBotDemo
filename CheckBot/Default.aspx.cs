using System;
using System.Collections;
using System.IO;
using System.Web;
using System.Web.UI;

namespace CheckBot
{

    public partial class Default : System.Web.UI.Page
    {
        public void uploadButton_Click(object sender, EventArgs args)
        {
            //uploadButton.Text = "You clicked me";
        }

        public void changeSample_Click(object sender, EventArgs args)
        {
            
            try
            {
                string[] filePaths = Directory.GetFiles(Server.MapPath("/images/"));

                string[] fileNames = new string[filePaths.Length];

                for(int i = 0; i < filePaths.Length;i++)
                {
                    fileNames[i] = (Path.GetFileName(filePaths[i]));
                }

                
                Random random = new Random();
                int rand = random.Next(0,fileNames.Length);


                //label.Text = filePaths[rand];

                //changeSample.Text = filePaths[rand];

                imageSample.ImageUrl = "~/images/" + fileNames[rand];
                Console.WriteLine("New URL: " + imageSample.ImageUrl);
                //label.Text = imageSample.ImageUrl;
                
            }
            catch(Exception e)
            {
                label.Text = "Exception: " + e.Message;
                Console.WriteLine("Exception: " + e.Message);
            }
        }

        public void resultsButton_Click(object sender, EventArgs args)
        {

        }
    }
}
