import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Интернет-магазин",
      shortDescription: "Полнофункциональный магазин с корзиной, оплатой и личным кабинетом.",
      description:
        "Современная e-commerce платформа с каталогом товаров, онлайн-оплатой и удобной панелью управления.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: [
        "Каталог с фильтрацией и поиском",
        "Онлайн-оплата через Stripe",
        "Личный кабинет покупателя",
        "Панель администратора",
        "Уведомления о заказах",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Полноценная e-commerce платформа под ключ. React на фронтенде, Node.js на бэкенде, PostgreSQL для данных. Реализована интеграция с платёжной системой Stripe, адаптивный дизайн для всех устройств, личные кабинеты покупателей и мощная панель управления заказами и товарами для администратора.",
    },
    {
      id: 2,
      title: "SaaS CRM-система",
      shortDescription: "Система управления клиентами и сделками для отдела продаж.",
      description: "CRM для малого и среднего бизнеса с воронкой продаж и аналитикой в реальном времени.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Supabase", "Recharts"],
      features: [
        "Воронка продаж (Kanban)",
        "База клиентов с историей",
        "Аналитика и дашборды",
        "Напоминания и задачи",
        "Командная работа",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "CRM-система для автоматизации продаж. Kanban-воронка для управления сделками, подробные карточки клиентов с историей взаимодействий, аналитические дашборды на Recharts. Командная работа с разграничением прав доступа. Суперпростой интерфейс — не нужно обучать команду неделями.",
    },
    {
      id: 3,
      title: "Корпоративный портал",
      shortDescription: "Внутренний портал компании с новостями, базой знаний и HR-модулем.",
      description: "Корпоративный интранет с новостями, документами, HR-функциями и поиском по базе знаний.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "MongoDB", "S3"],
      features: [
        "Новостная лента компании",
        "База знаний с поиском",
        "Заявки на отпуск/командировки",
        "Оргструктура и профили",
        "Хранилище документов",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Корпоративный интранет-портал для компании. Новостная лента с подписками, структурированная база знаний с полнотекстовым поиском, HR-модуль для отпусков и командировок, оргструктура с профилями сотрудников. Интеграция с S3 для хранения файлов и документов.",
    },
    {
      id: 4,
      title: "Платформа онлайн-обучения",
      shortDescription: "LMS-платформа с курсами, тестами и сертификатами.",
      description: "Образовательная платформа с видеоуроками, интерактивными тестами и прогрессом учеников.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Python", "PostgreSQL", "FFmpeg"],
      features: [
        "Видеоуроки со стримингом",
        "Интерактивные тесты",
        "Прогресс и статистика",
        "Генерация сертификатов",
        "Платный доступ к курсам",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "LMS-платформа для онлайн-школ и корпоративного обучения. Видеоуроки с адаптивным стримингом через FFmpeg, интерактивные тесты с разными типами вопросов, детальная статистика прогресса учеников, автоматическая генерация PDF-сертификатов. Встроенная система монетизации курсов.",
    },
    {
      id: 5,
      title: "Дашборд аналитики",
      shortDescription: "Аналитический дашборд с визуализацией данных в реальном времени.",
      description: "BI-дашборд для маркетинга и менеджмента с красивыми графиками и экспортом отчётов.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "Python", "Redis"],
      features: [
        "Интерактивные графики",
        "Данные в реальном времени",
        "Настраиваемые виджеты",
        "Экспорт в PDF/Excel",
        "Ролевой доступ",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "BI-дашборд для анализа бизнес-данных. Интерактивные графики на D3.js, обновление данных в реальном времени через Redis, drag-and-drop настройка виджетов. Экспорт отчётов в PDF и Excel одним кликом. Разграничение доступа: каждая роль видит только свои данные.",
    },
    {
      id: 6,
      title: "Мобильное приложение",
      shortDescription: "Кросс-платформенное приложение для iOS и Android.",
      description: "Мобильное приложение на React Native с офлайн-режимом и push-уведомлениями.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "TypeScript", "Firebase", "Expo"],
      features: [
        "iOS и Android из одной кодовой базы",
        "Работа в офлайн-режиме",
        "Push-уведомления",
        "Авторизация через соцсети",
        "Геолокация и карты",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Кросс-платформенное мобильное приложение на React Native и Expo. Единая кодовая база для iOS и Android экономит бюджет вдвое. Офлайн-режим через локальную базу данных, push-уведомления через Firebase, авторизация через Google/Apple/VK, интеграция с картами для геолокации.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Портфолио
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Избранные проекты</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Ключевые функции:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Код
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Демо
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Подробнее
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Ключевые функции:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Смотреть код
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Демо
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}