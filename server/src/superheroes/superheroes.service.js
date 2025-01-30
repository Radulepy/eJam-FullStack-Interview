"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroService = void 0;
var common_1 = require("@nestjs/common");
var SuperheroService = /** @class */ (function () {
    function SuperheroService() {
        this.superheroes = [];
        this.idCounter = 1;
    }
    SuperheroService.prototype.createSuperhero = function (name, superpower, humilityScore) {
        var newSuperhero = {
            id: this.idCounter++,
            name: name,
            superpower: superpower,
            humilityScore: humilityScore,
        };
        this.superheroes.push(newSuperhero);
        return newSuperhero;
    };
    SuperheroService.prototype.getSuperheroes = function () {
        return this.superheroes.sort(function (a, b) { return a.humilityScore - b.humilityScore; });
    };
    SuperheroService = __decorate([
        (0, common_1.Injectable)()
    ], SuperheroService);
    return SuperheroService;
}());
exports.SuperheroService = SuperheroService;
