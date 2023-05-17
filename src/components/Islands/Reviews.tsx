import { createSignal, For } from "solid-js"
import type { Post } from "@/post"
import { slugify } from "@/slug"

const format = (date: number) =>
  new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(date)

export const Reviews = (props: { posts: Post[]; tags: string[] }) => {
  let filterModal: HTMLDialogElement | undefined

  const [tags, setTags] = createSignal<string[]>([])

  const filteredPosts = () => {
    let _posts = props.posts

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
      <div class="flex w-full items-center gap-3">
        <button
          onClick={() => {
            filterModal?.showModal()
          }}
          class="rounded bg-secondary-base px-4 py-2 font-bold text-slate-50 transition-colors hover:bg-secondary-light"
        >
          Filtrar
        </button>
      </div>

      <ul class="m-auto flex w-full max-w-5xl flex-col gap-8 pb-12 lg:flex-row lg:flex-wrap lg:bg-transparent">
        <For each={filteredPosts()} fallback="loading...">
          {(post) => (
            <li class="w-full overflow-y-hidden lg:w-[304px]">
              <a
                href={`/posts/${slugify(post.title)}`}
                class="relative flex h-[500px] w-full flex-col justify-end gap-4 overflow-hidden rounded shadow-main"
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
                    {format(post.createdAt)}
                  </p>
                </div>
              </a>
            </li>
          )}
        </For>
      </ul>

      <dialog
        ref={filterModal as any}
        class={`fixed bottom-0 mb-0 w-full rounded-t p-6`}
      >
        <div class="flex flex-col gap-2">
          <h3 class="text-slate-900">Gênero</h3>
          <ul class="flex w-full items-center gap-2">
            {props.tags.map((tag) => (
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
            ))}
          </ul>
        </div>
      </dialog>
    </>
  )
}
