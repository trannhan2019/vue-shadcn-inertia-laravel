<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     *
     */
    protected $model = \App\Models\Company::class;
    public function definition(): array
    {
        return [
            'name'=>$this->faker->company(),
            'alias'=>$this->faker->companySuffix(),
            'is_active'=>true
        ];
    }
}
