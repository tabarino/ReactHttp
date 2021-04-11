using System;
using AutoMapper;
using ReactHttp.Core.Data.DTO;
using ReactHttp.Core.Data.Entity;

namespace ReactHttp.Core.Data.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Entity to DTO
            CreateMap<PostEntity, PostDTO>();

            // DTO to Entity
            CreateMap<PostDTO, PostEntity>();
        }
    }
}
