﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Checkbot.Controllers
{
    [Route("api/[controller]")]
    public class CheckController : Controller
    {

        // GET: api/check
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/check/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Console.WriteLine("Here");
            return id.ToString();
        }

        // POST api/check
        [HttpPost]
        public async Task<string[]> Post([FromBody] string url)
        {

            return await ComputerVision.ReadFileUrl(url);
        }

        // PUT api/check/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            Console.WriteLine("Here 3");
        }

        // DELETE api/check/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Console.WriteLine("Here 4");
        }

       
    }
}
