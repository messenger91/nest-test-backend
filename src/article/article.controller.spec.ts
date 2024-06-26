import { Test, TestingModule } from '@nestjs/testing'
import { ArticleController } from './article.controller'
import { ArticleService } from './article.service'
import { articleProviders } from './article.providers'

describe('ArticleController', () => {
  let controller: ArticleController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [ArticleService, ...articleProviders],
    }).compile()

    controller = module.get<ArticleController>(ArticleController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
