"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import SectionHeading from "./section-heading"
import { useTheme } from "@/context/ThemeContext"

// More accurate continent data
const continentData = {
  // North America
  northAmerica: [
    // United States and Canada
    { lat: 49, lng: -123 }, // Vancouver area
    { lat: 48, lng: -114 }, // Montana
    { lat: 45, lng: -93 }, // Minnesota
    { lat: 43, lng: -79 }, // Great Lakes
    { lat: 41, lng: -74 }, // New York
    { lat: 38, lng: -77 }, // Washington DC
    { lat: 37, lng: -122 }, // San Francisco
    { lat: 34, lng: -118 }, // Los Angeles
    { lat: 33, lng: -112 }, // Phoenix
    { lat: 32, lng: -96 }, // Dallas
    { lat: 30, lng: -90 }, // New Orleans
    { lat: 29, lng: -95 }, // Houston
    { lat: 25, lng: -80 }, // Miami
    { lat: 60, lng: -135 }, // Yukon
    { lat: 62, lng: -114 }, // Northwest Territories
    { lat: 56, lng: -94 }, // Hudson Bay
    { lat: 51, lng: -114 }, // Calgary
    { lat: 53, lng: -113 }, // Edmonton
    { lat: 45, lng: -73 }, // Montreal
    { lat: 43, lng: -79 }, // Toronto
    { lat: 47, lng: -52 }, // Newfoundland
    // Mexico and Central America
    { lat: 23, lng: -102 }, // Mexico
    { lat: 19, lng: -99 }, // Mexico City
    { lat: 21, lng: -89 }, // Yucatan
    { lat: 14, lng: -87 }, // Honduras
    { lat: 13, lng: -85 }, // Nicaragua
    { lat: 10, lng: -84 }, // Costa Rica
    { lat: 8, lng: -80 }, // Panama
    // Alaska
    { lat: 64, lng: -150 },
    { lat: 60, lng: -150 },
    { lat: 58, lng: -135 },
    // Greenland
    { lat: 72, lng: -40 },
    { lat: 67, lng: -50 },
    { lat: 60, lng: -45 },
  ],

  // South America
  southAmerica: [
    // Colombia, Venezuela, Guyana, Suriname, French Guiana
    { lat: 4, lng: -74 }, // Colombia
    { lat: 10, lng: -67 }, // Venezuela
    { lat: 5, lng: -58 }, // Guyana
    { lat: 4, lng: -56 }, // Suriname
    { lat: 4, lng: -53 }, // French Guiana
    // Ecuador, Peru, Bolivia
    { lat: 0, lng: -78 }, // Ecuador
    { lat: -10, lng: -75 }, // Peru
    { lat: -16, lng: -65 }, // Bolivia
    // Brazil
    { lat: -15, lng: -47 }, // Brasilia
    { lat: -23, lng: -46 }, // Sao Paulo
    { lat: -22, lng: -43 }, // Rio de Janeiro
    { lat: -3, lng: -60 }, // Manaus
    { lat: -8, lng: -35 }, // Northeast Brazil
    { lat: -30, lng: -51 }, // Southern Brazil
    // Chile, Argentina, Uruguay, Paraguay
    { lat: -33, lng: -70 }, // Santiago
    { lat: -34, lng: -58 }, // Buenos Aires
    { lat: -34, lng: -56 }, // Montevideo
    { lat: -25, lng: -57 }, // Asuncion
    { lat: -40, lng: -65 }, // Patagonia
    { lat: -53, lng: -70 }, // Tierra del Fuego
    // Amazon Basin
    { lat: -5, lng: -65 },
    { lat: -10, lng: -55 },
    { lat: -15, lng: -60 },
  ],

  // Europe
  europe: [
    // Western Europe
    { lat: 51, lng: 0 }, // London
    { lat: 48, lng: 2 }, // Paris
    { lat: 52, lng: 13 }, // Berlin
    { lat: 47, lng: 8 }, // Switzerland
    { lat: 41, lng: 2 }, // Barcelona
    { lat: 40, lng: -3 }, // Madrid
    { lat: 38, lng: -9 }, // Lisbon
    { lat: 53, lng: 6 }, // Netherlands
    { lat: 50, lng: 4 }, // Belgium
    // Northern Europe
    { lat: 59, lng: 18 }, // Stockholm
    { lat: 60, lng: 24 }, // Helsinki
    { lat: 59, lng: 10 }, // Oslo
    { lat: 55, lng: 12 }, // Copenhagen
    { lat: 64, lng: -22 }, // Reykjavik
    // Eastern Europe
    { lat: 52, lng: 21 }, // Warsaw
    { lat: 50, lng: 14 }, // Prague
    { lat: 47, lng: 19 }, // Budapest
    { lat: 44, lng: 26 }, // Bucharest
    { lat: 42, lng: 23 }, // Sofia
    { lat: 55, lng: 37 }, // Moscow
    { lat: 50, lng: 30 }, // Kiev
    { lat: 53, lng: 27 }, // Minsk
    // Southern Europe
    { lat: 41, lng: 12 }, // Rome
    { lat: 37, lng: 15 }, // Sicily
    { lat: 45, lng: 16 }, // Croatia
    { lat: 39, lng: 22 }, // Greece
    { lat: 41, lng: 28 }, // Istanbul
    // British Isles
    { lat: 54, lng: -2 }, // Northern England
    { lat: 56, lng: -4 }, // Scotland
    { lat: 53, lng: -7 }, // Ireland
  ],

  // Africa
  africa: [
    // Northern Africa
    { lat: 31, lng: -7 }, // Morocco
    { lat: 36, lng: 3 }, // Algeria
    { lat: 33, lng: 10 }, // Tunisia
    { lat: 32, lng: 22 }, // Libya
    { lat: 30, lng: 31 }, // Egypt
    { lat: 15, lng: 30 }, // Sudan
    // Western Africa
    { lat: 14, lng: -14 }, // Senegal
    { lat: 8, lng: -5 }, // Ivory Coast
    { lat: 9, lng: 8 }, // Nigeria
    { lat: 11, lng: -1 }, // Burkina Faso
    { lat: 8, lng: -1 }, // Ghana
    // Central Africa
    { lat: 6, lng: 12 }, // Cameroon
    { lat: 0, lng: 25 }, // DR Congo
    { lat: 7, lng: 21 }, // Central African Republic
    { lat: 15, lng: 19 }, // Chad
    // Eastern Africa
    { lat: 8, lng: 38 }, // Ethiopia
    { lat: 1, lng: 38 }, // Kenya
    { lat: -6, lng: 35 }, // Tanzania
    { lat: 0, lng: 32 }, // Uganda
    { lat: -1, lng: 30 }, // Rwanda
    // Southern Africa
    { lat: -26, lng: 28 }, // South Africa (Johannesburg)
    { lat: -33, lng: 18 }, // Cape Town
    { lat: -19, lng: 30 }, // Zimbabwe
    { lat: -13, lng: 27 }, // Zambia
    { lat: -20, lng: 17 }, // Namibia
    { lat: -24, lng: 25 }, // Botswana
    { lat: -29, lng: 28 }, // Lesotho
    // Madagascar
    { lat: -18, lng: 47 }, // Madagascar
    { lat: -20, lng: 57 }, // Mauritius
    // Horn of Africa
    { lat: 5, lng: 48 }, // Somalia
  ],

  // Asia
  asia: [
    // Middle East
    { lat: 35, lng: 38 }, // Syria
    { lat: 33, lng: 44 }, // Iraq
    { lat: 32, lng: 53 }, // Iran
    { lat: 24, lng: 45 }, // Saudi Arabia
    { lat: 31, lng: 35 }, // Israel/Jordan
    { lat: 25, lng: 51 }, // Qatar
    { lat: 24, lng: 54 }, // UAE
    // Central Asia
    { lat: 41, lng: 75 }, // Kyrgyzstan
    { lat: 38, lng: 68 }, // Tajikistan
    { lat: 41, lng: 64 }, // Uzbekistan
    { lat: 48, lng: 68 }, // Kazakhstan
    { lat: 38, lng: 58 }, // Turkmenistan
    // South Asia
    { lat: 28, lng: 77 }, // India (Delhi)
    { lat: 19, lng: 72 }, // Mumbai
    { lat: 13, lng: 80 }, // Chennai
    { lat: 34, lng: 74 }, // Kashmir
    { lat: 27, lng: 85 }, // Nepal
    { lat: 23, lng: 90 }, // Bangladesh
    { lat: 7, lng: 80 }, // Sri Lanka
    { lat: 33, lng: 73 }, // Pakistan
    // East Asia
    { lat: 35, lng: 139 }, // Japan (Tokyo)
    { lat: 34, lng: 108 }, // Central China
    { lat: 39, lng: 116 }, // Beijing
    { lat: 31, lng: 121 }, // Shanghai
    { lat: 23, lng: 113 }, // Guangzhou
    { lat: 22, lng: 114 }, // Hong Kong
    { lat: 25, lng: 121 }, // Taiwan
    { lat: 37, lng: 126 }, // South Korea
    { lat: 39, lng: 125 }, // North Korea
    // Southeast Asia
    { lat: 13, lng: 100 }, // Thailand
    { lat: 21, lng: 105 }, // Vietnam
    { lat: 11, lng: 104 }, // Cambodia
    { lat: 18, lng: 102 }, // Laos
    { lat: 21, lng: 95 }, // Myanmar
    { lat: 1, lng: 103 }, // Singapore
    { lat: 3, lng: 101 }, // Malaysia
    // Indonesia and Philippines
    { lat: -6, lng: 106 }, // Jakarta
    { lat: -7, lng: 110 }, // Java
    { lat: -8, lng: 115 }, // Bali
    { lat: 0, lng: 117 }, // Borneo
    { lat: -5, lng: 119 }, // Sulawesi
    { lat: -2, lng: 120 }, // Indonesia
    { lat: 14, lng: 121 }, // Philippines
    // Russia (Asian part)
    { lat: 56, lng: 93 }, // Siberia
    { lat: 62, lng: 129 }, // Yakutsk
    { lat: 43, lng: 132 }, // Vladivostok
    // Mongolia
    { lat: 47, lng: 106 }, // Mongolia
  ],

  // Australia and Oceania
  australia: [
    // Australia
    { lat: -33, lng: 151 }, // Sydney
    { lat: -37, lng: 145 }, // Melbourne
    { lat: -27, lng: 153 }, // Brisbane
    { lat: -31, lng: 115 }, // Perth
    { lat: -34, lng: 138 }, // Adelaide
    { lat: -42, lng: 147 }, // Tasmania
    { lat: -23, lng: 133 }, // Central Australia
    { lat: -16, lng: 145 }, // Cairns
    // New Zealand
    { lat: -41, lng: 174 }, // Wellington
    { lat: -36, lng: 174 }, // Auckland
    { lat: -43, lng: 172 }, // Christchurch
    { lat: -45, lng: 168 }, // Queenstown
    // Pacific Islands
    { lat: -17, lng: 178 }, // Fiji
    { lat: -21, lng: -175 }, // Tonga
    { lat: -13, lng: -172 }, // Samoa
    { lat: 21, lng: 158 }, // Hawaii
    { lat: -9, lng: 147 }, // Papua New Guinea
    { lat: -22, lng: 166 }, // New Caledonia
  ],

  // Antarctica
  antarctica: [
    { lat: -72, lng: 0 },
    { lat: -75, lng: 30 },
    { lat: -80, lng: 60 },
    { lat: -78, lng: 90 },
    { lat: -75, lng: 120 },
    { lat: -72, lng: 150 },
    { lat: -75, lng: 180 },
    { lat: -78, lng: -150 },
    { lat: -80, lng: -120 },
    { lat: -75, lng: -90 },
    { lat: -72, lng: -60 },
    { lat: -75, lng: -30 },
    { lat: -85, lng: 0 },
    { lat: -85, lng: 90 },
    { lat: -85, lng: 180 },
    { lat: -85, lng: -90 },
    { lat: -90, lng: 0 }, // South Pole
  ],
}

export default function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { isDark } = useTheme()
  const dotsRef = useRef<THREE.Points[]>([])

  useEffect(() => {
    // Update dot colors when theme changes
    if (dotsRef.current.length > 0) {
      const newColor = isDark ? 0xffffff : 0x000000
      dotsRef.current.forEach(dots => {
        const material = dots.material as THREE.PointsMaterial
        material.color.setHex(newColor)
      })
    }
  }, [isDark])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 200

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.enableZoom = false

    // Create globe base (dark sphere in dark mode, transparent in light mode)
    const radius = 80
    const globeGeometry = new THREE.SphereGeometry(radius, 64, 64)
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: isDark ? 0.8 : 0, // Transparent in light mode
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)

    // Create points for the continents
    const continentDots: THREE.Points[] = []

    // Function to convert lat/lng to 3D coordinates
    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)

      const x = -(radius * Math.sin(phi) * Math.cos(theta))
      const z = radius * Math.sin(phi) * Math.sin(theta)
      const y = radius * Math.cos(phi)

      return new THREE.Vector3(x, y, z)
    }

    // Create continents with theme-aware colors
    const continentColors = {
      northAmerica: isDark ? 0xffffff : 0x000000,
      southAmerica: isDark ? 0xffffff : 0x000000,
      europe: isDark ? 0xffffff : 0x000000,
      africa: isDark ? 0xffffff : 0x000000,
      asia: isDark ? 0xffffff : 0x000000,
      australia: isDark ? 0xffffff : 0x000000,
      antarctica: isDark ? 0xffffff : 0x000000,
    }

    // Create each continent
    Object.entries(continentData).forEach(([continent, points]) => {
      const positions: number[] = []

      points.forEach((point) => {
        const vector = latLngToVector3(point.lat, point.lng, radius + 0.5)
        positions.push(vector.x, vector.y, vector.z)
      })

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))

      const material = new THREE.PointsMaterial({
        color: continentColors[continent as keyof typeof continentColors],
        size: 1.2,
        transparent: true,
        opacity: 0.9,
      })

      const continentMesh = new THREE.Points(geometry, material)
      scene.add(continentMesh)
      continentDots.push(continentMesh)
    })

    // Store dots reference for theme updates
    dotsRef.current = continentDots

    // Add glow effect
    const glowGeometry = new THREE.SphereGeometry(radius + 2, 64, 64)
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        c: { value: 0.2 },
        p: { value: 4.0 },
        glowColor: { value: new THREE.Color(isDark ? 0x333333 : 0x000000) },
        viewVector: { value: camera.position },
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(0.6 - dot(vNormal, vNormel), 2.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, ${isDark ? '1.0' : '0.0'});
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    })

    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    scene.add(glowMesh)

    // Animation
    let isUserInteracting = false

    const handleMouseDown = () => {
      isUserInteracting = true
    }

    const handleMouseUp = () => {
      isUserInteracting = false
    }

    containerRef.current.addEventListener("mousedown", handleMouseDown)
    containerRef.current.addEventListener("mouseup", handleMouseUp)
    containerRef.current.addEventListener("mouseleave", handleMouseUp)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (!isUserInteracting) {
        // Auto-rotate when not interacting
        globe.rotation.y += 0.001
        continentDots.forEach((dot) => {
          dot.rotation.y += 0.001
        })
        glowMesh.rotation.y += 0.001
      }

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousedown", handleMouseDown)
        containerRef.current.removeEventListener("mouseup", handleMouseUp)
        containerRef.current.removeEventListener("mouseleave", handleMouseUp)
      }

      // Dispose resources
      globe.geometry.dispose()
      ;(globe.material as THREE.Material).dispose()
      glowGeometry.dispose()
      ;(glowMaterial as THREE.Material).dispose()
      continentDots.forEach((dot) => {
        dot.geometry.dispose()
        ;(dot.material as THREE.Material).dispose()
      })
    }
  }, [isDark])

  return (
    <section id="globe" className="py-20 px-4">
      <SectionHeading
        title="Interactive Globe"
        subtitle="Explore a 3D visualization of Earth with accurate continent representation"
      />

      <motion.div
        className="relative mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div
          ref={containerRef}
          className="w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        ></div>

        {isHovering && (
          <div className="absolute bottom-4 left-0 right-0 text-center text-xs md:text-sm text-gray-400">
            Drag to rotate the globe
          </div>
        )}
      </motion.div>
    </section>
  )
} 