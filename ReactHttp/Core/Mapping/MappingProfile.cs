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
            CreateMap<PostEntity, PostDTO>();
        }
    }
}
