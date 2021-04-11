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
    [Route("/api/posts")]
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

        [HttpGet]
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id)
        {
            var post = await _repository.GetPost(id);

            if (post == null)
            {
                return NotFound();
            }

            var result = _mapper.Map<PostEntity, PostDTO>(post);

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost([FromBody] PostDTO postDTO)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogError(null, "Invalid Post");
                return BadRequest(ModelState);
            }

            var post = _mapper.Map<PostDTO, PostEntity>(postDTO);

            _repository.Add(post);
            await _unitOfWork.CompleteAsync();

            post = await _repository.GetPost(post.Id);
            var result = _mapper.Map<PostEntity, PostDTO>(post);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(int id, [FromBody] PostDTO postDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = await _repository.GetPost(id);
            if (post == null)
            {
                return NotFound();
            }

            _mapper.Map<PostDTO, PostEntity>(postDTO, post);
            await _unitOfWork.CompleteAsync();

            post = await _repository.GetPost(id);
            var result = _mapper.Map<PostEntity, PostDTO>(post);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            var post = await _repository.GetPost(id);
            if (post == null)
            {
                return NotFound();
            }

            _repository.Remove(post);
            await _unitOfWork.CompleteAsync();

            return Ok(id);
        }
    }
}
