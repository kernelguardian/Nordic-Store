import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const products = {
  whimsical: {
    name: 'Whimsical Cake',
    // price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/whimsical_a.jpeg',
        alt: 'Image of cake',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/whimsical_b.jpeg',
        alt: 'Image of cake',
      },
      {
        id: 3,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/whimsical_c.jpeg',
        alt: 'Image of cake',
      },

      // More images...
    ],

    description: `
    <p>Pefect for people who like Celebrations cakes</p>
  `,
    details: [
      {
        name: 'Allergen Information',
        items: [
          'Made in a facility that processes peanuts',
          '..',
          '....',
          'Anything Else about allergen',
        ],
      },
      // More sections...
    ],
  },
  tuxedo: {
    name: 'Tuxedo Cake',
    // price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/tuxedo_a.jpeg',
        alt: 'Image of cake',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/tuxedo_b.jpeg',
        alt: 'Image of cake',
      },

      // More images...
    ],

    description: `
    <p>Pefect for people who like Celebrations cakes</p>
  `,
    details: [
      {
        name: 'Allergen Information',
        items: [
          'Made in a facility that processes peanuts',
          '..',
          '....',
          'Anything Else about allergen',
        ],
      },
      // More sections...
    ],
  },
  celebrations: {
    name: 'Celebration Cake',
    // price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/celebrations.jpeg',
        alt: 'Image of cake',
      },

      // More images...
    ],

    description: `
    <p>Pefect for people who like Celebrations cakes</p>
  `,
    details: [
      {
        name: 'Allergen Information',
        items: [
          'Made in a facility that processes peanuts',
          '..',
          '....',
          'Anything Else about allergen',
        ],
      },
      // More sections...
    ],
  },
  unicorn: {
    name: 'Unicorn Cake',
    // price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/unicorn_a.jpeg',
        alt: 'Image of cake',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/unicorn_b.jpeg',
        alt: 'Image of cake',
      },
      // More images...
    ],

    description: `
    <p>Pefect for people who like unicorn cakes</p>
  `,
    details: [
      {
        name: 'Allergen Information',
        items: [
          'Made in a facility that processes peanuts',
          '..',
          '....',
          'Anything Else about allergen',
        ],
      },
      // More sections...
    ],
  },
  cartoon: {
    name: 'Cartoon Cake',
    // price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Front view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/cartoon.jpeg',
        alt: 'Image of Cartoon Cake',
      },
    ],

    description: `
    <p>Pefect for people who like Cartoon cakes</p>
  `,
    details: [
      {
        name: 'Allergen Information',
        items: [
          'Made in a facility that processes peanuts',
          '..',
          '....',
          'Anything Else about allergen',
        ],
      },
      // More sections...
    ],
  },
  gender_reveal: {
    name: 'Gender Reveal Cake',
    // price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/gender_reveal_a.jpeg',
        alt: 'Image of cake',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/gender_reveal_b.jpeg',
        alt: 'Image of cake',
      },
      {
        id: 3,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/gender_reveal_c.jpeg',
        alt: 'Image of cake',
      },
      // More images...
    ],

    description: `
    <p>Pefect for people who like Cartoon cakes</p>
  `,
    details: [
      {
        name: 'Allergen Information',
        items: [
          'Made in a facility that processes peanuts',
          '..',
          '....',
          'Anything Else about allergen',
        ],
      },
      // More sections...
    ],
  },
  mom_to_be: {
    name: 'Mom to be Cake',
    // price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/mom_to_be_a.jpeg',
        alt: 'Image of cake',
      },
      {
        id: 2,
        name: 'Angled view',
        src: 'https://pub-d7f172149ef241b9bcaa2c4f68065c38.r2.dev/mom_to_be_b.jpeg',
        alt: 'Image of cake',
      },
      // More images...
    ],

    description: `
    <p>Pefect for people who like Cartoon cakes</p>
  `,
    details: [
      {
        name: 'Allergen Information',
        items: [
          'Made in a facility that processes peanuts',
          '..',
          '....',
          'Anything Else about allergen',
        ],
      },
      // More sections...
    ],
  },
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ImageGallery({ params }) {
  const product = products[params.product]
  console.log(params.product)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.src}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? 'text-indigo-500'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? 'text-indigo-600' : 'text-gray-900',
                                'text-sm font-medium',
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
