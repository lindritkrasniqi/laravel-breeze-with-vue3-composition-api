<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'owner_firstname' => $this->faker->firstName(),
            'owner_lastname' => $this->faker->lastName(),
            'owner_email' => $this->faker->email(),
            'owner_avatar' => $this->faker->imageUrl(),
            'name' => $this->faker->company(),
            'country' => $this->faker->country(),
            'street_address' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'state' => $this->faker->countryCode(),
            'postal_code' => $this->faker->postcode(),
        ];
    }
}
