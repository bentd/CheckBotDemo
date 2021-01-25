//Source: https://github.com/Azure-Samples/cognitive-services-quickstart-code/blob/415af855684e98d60ab9beca28065e30a1474848/dotnet/ComputerVision/ComputerVisionQuickstart.cs#L615
using System;
using System.Collections.Generic;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Threading;
using System.Linq;
namespace Checkbot
{
    public class ComputerVision
    {
        private const string SUBSCRIPTIONKEY = "3428b884dd704497b6165b9a41f3ea12";
        private const string ENDPOINT = "https://computervisionr.cognitiveservices.azure.com/";


        public static ComputerVisionClient Authenticate()
        {
            ComputerVisionClient client =
              new ComputerVisionClient(new ApiKeyServiceClientCredentials(SUBSCRIPTIONKEY))
              { Endpoint = ENDPOINT };
            return client;
        }

        public static async Task<string[]> ReadFileUrl(string urlFile)
        {
            ComputerVisionClient client = Authenticate();

            List<string> list = new List<string>();

            // Read text from URL
            var textHeaders = await client.ReadAsync(urlFile, language: "en");
            // After the request, get the operation location (operation ID)
            string operationLocation = textHeaders.OperationLocation;
            Thread.Sleep(2000);


            // Retrieve the URI where the extracted text will be stored from the Operation-Location header.
            // We only need the ID and not the full URL
            const int numberOfCharsInOperationId = 36;
            string operationId = operationLocation.Substring(operationLocation.Length - numberOfCharsInOperationId);

            // Extract the text
            ReadOperationResult results;

            do
            {
                results = await client.GetReadResultAsync(Guid.Parse(operationId));
            }
            while ((results.Status == OperationStatusCodes.Running ||
                results.Status == OperationStatusCodes.NotStarted));

            // Add text to list
            var textUrlFileResults = results.AnalyzeResult.ReadResults;
            foreach (ReadResult page in textUrlFileResults)
            {
                foreach (Line line in page.Lines)
                {
                   list.Add(line.Text);
                }
            }

            return list.ToArray();
        }
    }
}
