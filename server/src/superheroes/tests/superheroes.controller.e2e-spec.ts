import { TestingModule, Test } from "@nestjs/testing";
import { SuperheroesController } from "../superheroes.controller";
import { SuperheroService } from "../superheroes.service";

describe('SuperheroesController', () => {
    let controller: SuperheroesController;
    let service: SuperheroService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SuperheroesController],
            providers: [SuperheroService],
        }).compile();

        controller = module.get<SuperheroesController>(SuperheroesController);
        service = module.get<SuperheroService>(SuperheroService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('createSuperhero', () => {
        it('should create a new superhero', async () => {
            // Arrange: prepare the input data and expected output
            const createSuperheroDto = {
                name: 'Batman',
                superpower: 'Detective skills',
                humilityScore: 8,
            };
            const createdSuperhero = {
                id: 1,
                ...createSuperheroDto,
            };

            // Mock the service method
            jest.spyOn(service, 'createSuperhero').mockImplementation((name: string, superpower: string, humilityScore: number) => {
                return {
                    id: 1,
                    name,
                    superpower,
                    humilityScore,
                };
            });

            const result = await controller.createSuperhero(createSuperheroDto);
            expect(result).toEqual(createdSuperhero);
        });
    });

    describe('getSuperheroes', () => {
        it('should return superheroes sorted by humility score', async () => {
            // Arrange: create multiple superheroes with known humility scores
            const superhero1 = { id: 1, name: 'Batman', superpower: 'Detective skills', humilityScore: 8 };
            const superhero2 = { id: 2, name: 'Superman', superpower: 'Super strength', humilityScore: 5 };
            const superhero3 = { id: 3, name: 'Wonder Woman', superpower: 'Super agility', humilityScore: 10 };

            jest.spyOn(service, 'getSuperheroes').mockReturnValue([superhero2, superhero1, superhero3]);
            const result = await controller.getSuperheroes();
            expect(result).toStrictEqual([superhero2, superhero1, superhero3]);
        });
    });

});
