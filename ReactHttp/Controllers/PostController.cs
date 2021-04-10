using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Core.Logging;
using Microsoft.AspNetCore.Mvc;
using ReactHttp.Core.Data;
using ReactHttp.Core.Data.DTO;
using ReactHttp.Core.Data.Entity;
using ReactHttp.Core.Data.Repository;

namespace ReactHttp.Controllers
{
    public class PostController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IPostRepository _repository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly INLogLogger<PostController> _logger;

        public PostController(
            IMapper mapper,
            IPostRepository repository,
            IUnitOfWork unitOfWork,
            INLogLogger<PostController> logger)
        {
            _mapper = mapper;
            _repository = repository;
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        [HttpGet("/api/posts")]
        public async Task<IActionResult> GetPosts()
        {
            var posts = await _repository.GetPosts();

            if (posts == null)
            {
                _logger.LogError(null, "Posts Not Found");
                return NotFound();
            }

            var result = _mapper.Map<List<PostEntity>, List<PostDTO>>(posts);

            return Ok(result);
        }
    }
}
