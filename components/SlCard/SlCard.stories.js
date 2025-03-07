import SlCard from './SlCard.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// <sl-card> is ready to use!

export default {
    title: "Components/SlCard",
    component:
    SlCard,
    render: () => {
        return `

            <sl-card class="card-basic">
              This is just a basic card. No image, no header, and no footer. Just your content.
            </sl-card>
            
            <style>
              .card-basic {
                max-width: 300px;
              }
            </style>

        `;
    },
};

export const Primary = {
    render: () => {
        return `

<sl-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <sl-button variant="primary" pill>More Info</sl-button>
    <sl-rating></sl-rating>
  </div>
</sl-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--sl-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

        `;
    },
};

export const CardWithHeader = {
    render: () => {
        return `

            <sl-card class="card-header">
              <div slot="header">
                Header Title
                <sl-icon-button name="gear" label="Settings"></sl-icon-button>
              </div>
            
              This card has a header. You can put all sorts of things in it!
            </sl-card>
            
            <style>
              .card-header {
                max-width: 300px;
              }
            
              .card-header [slot='header'] {
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            
              .card-header h3 {
                margin: 0;
              }
            
              .card-header sl-icon-button {
                font-size: var(--sl-font-size-medium);
              }
            </style>

        `;
    },
};

export const CardWithFooter = {
    render: () => {
        return `

<sl-card class="card-footer">
This card has a footer. You can put all sorts of things in it!

<div slot="footer">
<sl-rating></sl-rating>
<sl-button variant="primary">Preview</sl-button>
</div>
</sl-card>

<style>
.card-footer {
max-width: 300px;
}

.card-footer [slot='footer'] {
display: flex;
justify-content: space-between;
align-items: center;
}
</style>

        `;
    },
};


export const CardWithImage = {
    render: () => {
        return `

<sl-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</sl-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>

        `;
    },
};
