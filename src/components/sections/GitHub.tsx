"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, GitFork, Eye, ExternalLink, Github, Globe } from "lucide-react";
import { GitHubRepo, GitHubStats } from "@/lib/github";
import { getLanguageColor, formatNumber, truncate } from "@/lib/utils";
import Image from "next/image";

// Skeleton loader component
function RepoSkeleton() {
  return (
    <div className="glass rounded-2xl border border-white/8 p-5 space-y-3">
      <div className="skeleton h-4 w-2/3 rounded-lg" />
      <div className="skeleton h-3 w-full rounded-lg" />
      <div className="skeleton h-3 w-4/5 rounded-lg" />
      <div className="flex gap-3 mt-4">
        <div className="skeleton h-3 w-12 rounded-full" />
        <div className="skeleton h-3 w-12 rounded-full" />
        <div className="skeleton h-3 w-16 rounded-full" />
      </div>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <div className="glass rounded-2xl border border-white/8 p-6 space-y-4">
      <div className="flex items-center gap-4">
        <div className="skeleton w-20 h-20 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-5 w-40 rounded-lg" />
          <div className="skeleton h-3 w-28 rounded-lg" />
        </div>
      </div>
      <div className="skeleton h-3 w-full rounded-lg" />
      <div className="skeleton h-3 w-3/4 rounded-lg" />
    </div>
  );
}

function RepoCard({
  repo,
  index,
}: {
  repo: GitHubRepo;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const langColor = getLanguageColor(repo.language || "");

  return (
    <motion.div
      ref={ref}
      className="glass glass-hover rounded-2xl border border-white/8 p-5 flex flex-col gap-3 group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
    >
      {/* Repo name */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Github className="w-4 h-4 text-white/40 shrink-0" />
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/90 hover:gradient-text transition-all duration-300 text-sm truncate"
          >
            {repo.name}
          </a>
        </div>
        <div className="flex gap-1 shrink-0">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-white/50 leading-relaxed flex-1">
        {repo.description
          ? truncate(repo.description, 80)
          : "No description provided."}
      </p>

      {/* Language + stats */}
      <div className="flex items-center gap-4 text-xs text-white/40">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: langColor }}
            />
            <span>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          <span>{formatNumber(repo.stargazers_count)}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-3 h-3" />
          <span>{formatNumber(repo.forks_count)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          <span>{formatNumber(repo.watchers_count)}</span>
        </div>
      </div>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function LanguageBar({ languages }: { languages: Record<string, number> }) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);

  return (
    <div className="space-y-3">
      {/* Color bar */}
      <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
        {sorted.map(([lang, count]) => (
          <motion.div
            key={lang}
            className="h-full rounded-sm"
            style={{
              background: getLanguageColor(lang),
              width: `${(count / total) * 100}%`,
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            title={`${lang}: ${Math.round((count / total) * 100)}%`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {sorted.map(([lang, count]) => (
          <div key={lang} className="flex items-center gap-1.5 text-xs text-white/50">
            <div
              className="w-2.5 h-2.5 rounded-sm"
              style={{ background: getLanguageColor(lang) }}
            />
            <span>{lang}</span>
            <span className="text-white/30">
              {Math.round((count / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [data, setData] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed");
        const json = await res.json();
        setData(json);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm text-success mb-4">
            <Github className="w-3.5 h-3.5" />
            GitHub Activity
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Open Source{" "}
            <span className="gradient-text-alt">Presence</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Live data and project descriptions from GitHub — refreshed every five minutes.
          </p>
        </motion.div>

        {/* Profile card + stats */}
        {loading ? (
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            <ProfileSkeleton />
            <div className="lg:col-span-2 grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass rounded-2xl border border-white/8 p-5 skeleton h-24"
                />
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <Github className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <p className="text-white/40 mb-4">Could not load GitHub data</p>
            <a
              href="https://github.com/Tonnybraxton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/15 text-white/80 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              View GitHub Profile
            </a>
          </div>
        ) : data ? (
          <>
            {/* Profile + stats row */}
            <div className="grid lg:grid-cols-3 gap-6 mb-10">
              {/* Profile card */}
              <motion.div
                className="glass rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-primary/30">
                    <Image
                      src={data.profile.avatar_url}
                      alt={data.profile.login}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {data.profile.name || data.profile.login}
                    </h3>
                    <p className="text-white/50 text-sm">@{data.profile.login}</p>
                    <a
                      href={data.profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-accent transition-colors flex items-center gap-1 mt-1"
                    >
                      View Profile
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {data.profile.bio && (
                  <p className="text-white/60 text-sm leading-relaxed">
                    {data.profile.bio}
                  </p>
                )}

                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/5">
                  {[
                    { label: "Repos", value: data.profile.public_repos },
                    { label: "Followers", value: data.profile.followers },
                    { label: "Following", value: data.profile.following },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-bold text-lg gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stats cards */}
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: "⭐",
                    label: "Total Stars",
                    value: data.totalStars,
                    color: "text-yellow-400",
                  },
                  {
                    icon: "🍴",
                    label: "Total Forks",
                    value: data.totalForks,
                    color: "text-accent",
                  },
                  {
                    icon: "📦",
                    label: "Repositories",
                    value: data.repos.length,
                    color: "text-primary",
                  },
                  {
                    icon: "💻",
                    label: "Languages",
                    value: Object.keys(data.languages).length,
                    color: "text-success",
                  },
                  {
                    icon: "🔥",
                    label: "Issues",
                    value: data.repos.reduce(
                      (a, r) => a + r.open_issues_count,
                      0
                    ),
                    color: "text-orange-400",
                  },
                  {
                    icon: "👁️",
                    label: "Watchers",
                    value: data.repos.reduce(
                      (a, r) => a + r.watchers_count,
                      0
                    ),
                    color: "text-purple-400",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="glass glass-hover rounded-2xl border border-white/8 p-4 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className={`text-2xl font-black ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages bar */}
            {Object.keys(data.languages).length > 0 && (
              <motion.div
                className="glass rounded-2xl border border-white/8 p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-lg">🗺️</span>
                  Language Distribution
                </h3>
                <LanguageBar languages={data.languages} />
              </motion.div>
            )}

            {/* Repos grid */}
            <div>
              <h3 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                Latest Repositories
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.repos.map((repo, i) => (
                  <RepoCard key={repo.id} repo={repo} index={i} />
                ))}
              </div>
            </div>
          </>
        ) : null}

        {/* View all link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/Tonnybraxton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass border border-white/15 text-white/80 hover:text-white hover:border-primary/50 transition-all duration-300 font-medium"
          >
            <Github className="w-5 h-5" />
            Visit GitHub Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
