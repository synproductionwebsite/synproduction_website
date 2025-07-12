'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

type Article = {
  id: number
  title: string
  media?: string
  description: string
  imageUrl: string
  articleUrl?: string
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Crowdfunding pour Maze',
    media: 'Maze',
    description:
      'Maze est un média culturel indépendant qui promeut la scène artistique émergente. Cette campagne finance une soirée musicale unique organisée par SYN Production.',
    imageUrl: '/img/article/maze.jpg',
    articleUrl:
      'https://www.helloasso.com/associations/syn-production/collectes/crowdfunding-maze-media',
  },
  {
    id: 2,
    title: 'Découverte du Jazz',
    media: 'Le Monde de la Musique',
    description:
      'Un voyage à travers les origines du jazz, ses grands artistes et son influence sur la musique moderne. Le jazz continue de captiver les auditeurs.',
    imageUrl: '/img/article/maze.jpg',
    articleUrl: '#',
  },
  {
    id: 3,
    title: 'L’art de la photographie urbaine',
    description:
      'La photographie urbaine capture la vie des villes avec des perspectives uniques. Elle révèle l’âme des métropoles à travers des compositions audacieuses.',
    imageUrl: '/img/article/maze.jpg',
    articleUrl: '#',
  },
  {
    id: 4,
    title: 'Festival Émergence 2025',
    media: 'SYN Prod',
    description:
      'Un événement pluridisciplinaire réunissant jeunes talents et figures montantes de la scène émergente.',
    imageUrl: '/img/article/maze.jpg',
    articleUrl: '#',
  },
  {
    id: 5,
    title: 'Interview : Clara, artiste à suivre',
    description:
      'Clara partage sa vision de l’art et son parcours dans l’univers de la musique électronique indépendante.',
    imageUrl: '/img/article/maze.jpg',
    articleUrl: 'https://synprod.com/interview-clara',
  },
  {
    id: 6,
    title: 'Retour sur la Nuit des Arts 2024',
    media: 'Culture Actuelle',
    description:
      'Une soirée riche en performances et découvertes artistiques. Revivez les moments forts de l’édition 2024.',
    imageUrl: '/img/article/maze.jpg',
    articleUrl: '#',
  },
]

const CARD_WIDTH = 450
const CARD_GAP = 20
const SIDE_PADDING = 150

export default function ActusPage() {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(articles.length / 2))
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll to the current card when currentIndex changes
  useEffect(() => {
    if (!containerRef.current) return

    const scrollPos =
      currentIndex * (CARD_WIDTH + CARD_GAP) -
      containerRef.current.clientWidth / 2 +
      CARD_WIDTH / 2

    containerRef.current.scrollTo({
      left: scrollPos,
      behavior: 'smooth',
    })
  }, [currentIndex])

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovered])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length)
  }

  return (
    <div className="relative w-full bg-gradient-to-r from-[#685A96] via-[#685A96] to-[#2c5d32] flex flex-col items-center justify-center p-8">
      <h2 className="text-5xl font-extrabold mb-5 text-white select-none">ACTUS</h2>

      {/* Carrousel */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto no-scrollbar gap-5 w-full snap-x snap-mandatory py-10"
        style={{
          scrollBehavior: 'smooth',
          paddingLeft: SIDE_PADDING,
          paddingRight: SIDE_PADDING,
        }}
      >
        {articles.map((article, index) => {
          const isActive = index === currentIndex

          return (
            <a
              key={article.id}
              href={article.articleUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`snap-center flex-shrink-0 bg-white bg-opacity-90 backdrop-blur-md shadow-lg cursor-pointer transform transition-all duration-500 ease-in-out rounded-3xl overflow-hidden
                ${isActive ? 'scale-110 shadow-3xl z-30 opacity-100' : 'scale-90 opacity-50'}
            `}
              style={{ width: CARD_WIDTH }}
              aria-current={isActive ? 'true' : 'false'}
            >
              <div className="flex flex-row h-full">
                {/* Image à gauche */}
                <div className="relative w-[40%] min-h-[200px]">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority={isActive}
                  />
                </div>

                {/* Texte à droite */}
                <div className="p-4 flex flex-col w-[60%]">
                  <h3 className="text-xl font-bold mb-1">{article.title}</h3>
                  {article.media && (
                    <h4 className="text-md font-semibold mb-2 text-purple-700">{article.media}</h4>
                  )}
                  <p className="text-gray-700 text-sm line-clamp-5 text-justify">{article.description}</p>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      {/* Navigation : flèches + points */}
      <div className="flex items-center justify-center gap-8 mt-3 select-none">
        {/* Flèche gauche */}
        <button
          onClick={goToPrevious}
          aria-label="Article précédent"
          className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition text-amber-300"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Dots */}
        <div className="flex space-x-3">
          {articles.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setCurrentIndex(i)}
              className={`w-5 h-5 rounded-full transition-colors duration-300 ${
                i === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Aller à l’article ${i + 1}`}
            />
          ))}
        </div>

        {/* Flèche droite */}
        <button
          onClick={goToNext}
          aria-label="Article suivant"
          className="bg-white p-3 rounded-full shadow hover:bg-gray-200 transition text-amber-300"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  )
}
