import type { Post } from "@/post"
import { slugify } from "@/slug"
import { createSignal, For } from "solid-js"

export const AllPosts = (props: { posts: Post[]; tags: string[] }) => {
  const [search, setSearch] = createSignal("")
  const [tags, setTags] = createSignal<string[]>([])

  const filteredPosts = () => {
    let _posts = props.posts

    if (search().length > 0) {
      const query = search().toLowerCase()
      _posts = _posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
      )
    }

    if (tags().length > 0) {
      _posts = _posts.filter((post) => {
        const atLeastOneTagSelected = post.tags.some((tag) =>
          tags().includes(tag)
        )

        return atLeastOneTagSelected
      })
    }

    return _posts
  }

  return (
    <>
      <section class="w-full bg-slate-50 p-6 lg:py-12">
        <div class="m-auto flex max-w-5xl flex-col items-start gap-6">
          <div class="flex w-full flex-col">
            <h2 class="text-inherit">Todas Publicações</h2>
            <div class="h-[5px] w-[120px] rounded-sm bg-accent-base"></div>
          </div>

          <label for={"search"} class="relative w-full">
            <div class="absolute bottom-0 left-3 top-0 my-auto h-max w-max">
              <Search />
            </div>

            <input
              id={"search"}
              type="search"
              value=""
              onChange={(event) => setSearch(event.target.value ?? "")}
              placeholder="Pesquise o post"
              class={
                "w-full rounded border-2 border-slate-300 bg-slate-50 px-3 py-2 pl-[calc(12px+16px+8px)] transition-colors placeholder:text-slate-400 focus:border-secondary-dark focus:outline-none"
              }
            />
          </label>

          <ul class="flex w-full items-center gap-2 overflow-x-auto">
            <For each={props.tags} fallback="loading...">
              {(tag) => (
                <li>
                  <button
                    onClick={() => {
                      if (tags().includes(tag)) {
                        setTags((tags) => tags.filter((_type) => _type !== tag))
                      } else {
                        setTags((tags) => [...tags, tag])
                      }
                    }}
                    class={`flex shrink-0 items-center gap-1 rounded-full px-2 py-1 transition-colors ${
                      tags().includes(tag)
                        ? "bg-secondary-base text-slate-50"
                        : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tag}

                    <svg
                      class={tags().includes(tag) ? "block" : "hidden"}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L12 4M4 4L12 12"
                        stroke="#F1F5F9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </section>

      <ul class="m-auto flex max-w-5xl flex-col gap-8 bg-black pb-12 lg:flex-row lg:flex-wrap lg:bg-transparent">
        <For each={filteredPosts()} fallback="loading...">
          {(post) => (
            <li class="h-![500px] overflow-y-hidden lg:w-[304px]">
              <a
                href={`/posts/${slugify(post.title)}`}
                class="flex h-[500px] w-full flex-col justify-end gap-4 overflow-hidden rounded shadow-main"
              >
                <img
                  src={post.imageUrl}
                  alt={`Imagem de capa do post ${post.title}`}
                  width={375}
                  height={500}
                  loading={"lazy"}
                  fetchpriority={"low"}
                  class="absolute h-[500px] w-full object-cover lg:w-[304px]"
                  style="z-index: 1;"
                />

                <div
                  class="absolute h-[500px] w-full lg:w-[304px]"
                  style="z-index: 2; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 87.5%);"
                ></div>

                <div class="flex flex-col gap-4 p-6" style="z-index: 3;">
                  <h3 class="font-display text-slate-50">{post.title}</h3>

                  <p class="font-base text-slate-50/50">{post.description}</p>

                  <ul class="scroll-b flex w-full items-center gap-1 overflow-x-auto">
                    {post.tags.map((tag) => (
                      <li>
                        <div class="rounded-full border-2 border-white bg-transparent px-4 py-1 text-white transition-all hover:border-slate-100 hover:brightness-95">
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p class="font-bold text-accent-base">
                    {new Date(post.createdAt).toDateString()}
                  </p>
                </div>
              </a>
            </li>
          )}
        </For>
      </ul>
    </>
  )
}

function Search() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 14L10.5354 10.5353M10.5354 10.5353C11.4731 9.59762 11.9999 8.3258 11.9999 6.99967C11.9999 5.67354 11.4731 4.40172 10.5354 3.464C9.59765 2.52629 8.32583 1.99948 6.9997 1.99948C5.67357 1.99948 4.40175 2.52629 3.46403 3.464C2.52632 4.40172 1.99951 5.67354 1.99951 6.99967C1.99951 8.3258 2.52632 9.59762 3.46403 10.5353C4.40175 11.4731 5.67357 11.9999 6.9997 11.9999C8.32583 11.9999 9.59765 11.4731 10.5354 10.5353Z"
        stroke="#94A3B8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
