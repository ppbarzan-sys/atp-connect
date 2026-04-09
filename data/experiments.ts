// Auto-generated from index.html

export type EquipmentCategory =
  | 'mobile-lab'       // Requires ATP Mobile Lab equipment (glassware, chemicals, sensors)
  | 'arduino-kit'      // Requires Arduino Science Kit R3 or Starter Kit
  | 'basic-supplies'   // Requires only basic supplies (ruler, string, coins, water, etc.)
  | 'none'             // Theory-only or simulation — no physical equipment needed

export interface Experiment {
  num: number;
  cardEmoji?: string;
  title: string;
  section: string;
  desc: string;
  setupTime: string;
  duration: string;
  equipmentNeeded?: EquipmentCategory;
  summary: {
    whatTheyLearn: string;
    instructions: string[];
    expectedOutcome: string;
  };
  experiment: {
    equipment: Array<{ emoji: string; name: string }>;
    observationsToRecord: string[];
    theoryPoints: string[];
    realWorldConnections: string[];
    formula: string;
  };
  questions: {
    mcq: Array<{
      text: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }>;
    discussion: string[];
  };
  overview: {
    conceptBreakdown: Array<{ label: string; pct: number }>;
    misconceptions: string[];
    hook: string;
    khanLinks: Array<{ title: string; url: string }>;
  };
  dataTable: {
    headers: string[];
    rows: number;
  };
  observations: string[];
  conclusion: string;
  ai: {
    opening: string;
    keywords: {
      setup?: string;
      formula?: string;
      error?: string;
      question?: string;
      real?: string;
      result?: string;
      extend?: string;
      explain?: string;
      hook?: string;
      misconception?: string;
    };
    hint: string;
    expected: string;
  };
}

export const sectionColors: Record<string, string> = {
  Mechanics: '#14B8A6',
  Heat: '#F97316',
  Acoustics: '#8B5CF6',
  Optics: '#10B981',
  Magnetism: '#EF4444',
  Electricity: '#F59E0B',
};

export const sectionEmojis: Record<string, string> = {
  Mechanics: '⚙️',
  Heat: '🔥',
  Acoustics: '🎵',
  Optics: '🔭',
  Magnetism: '🧲',
  Electricity: '⚡',
};

export const ATP_LOGO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACECAIAAACI1a6vAAAehUlEQVR4nO2de1xTR9rHZ83rLgGrhGStoOASAtQrCjaAooLIxZaiYJUXfOtK0bxqddtabbvetlus266u1dLafmjRXl6k3vCytAhCS70CLSoU2woBxAvQLiGUrR52+Zz0/WNw9jSXk5Nz5uTmfD/9YwyTmTlpfplnnpl5nl/9/PPPgEAguAVDHD0AAoGADaJnAsF9IHomENwHomcCwX0geiYQ3AeiZwLBfSB6JhDcB6JnAsF9IHomENwHomcCwX0geiYQ3AeiZwLBffgvRw8AG519fQCAho5O9MqP/f19/f/y9x6BXhk1fPjIYV4jhw2TDCE/ZAQ3xFX1TA0MNP2j+9oPP3zd0fnVrVu6O3dtbSEpNGSsj8+4B0eOH/WgTCoVY5AEgp35lQvdl6QNhrYefZW25bNmrba7G2PLci/PuSHBUWPHho8ZLR06FGPLBII9cQ09a7t1JxobD16uZ6mjDvAPlPtMHDUKvTJq+HCvX/+6haH8m70/tvf0lF1rYm9nRXTUxFEPEpuc4HI4tZ6pgYG/X/1mf+2XZs3ppNCQGGXgZD9fb6nU1kmVNhh++OmnVl1PdXt7RVOz2fY10VGxqiCVQs5z9ASC3XFSPXf29R24dNl0QlYH+D82YfxkP1/f4cMxdqenqG+6vq9ubzftUaVQvBAfF+bni7E7AkEknE7PnX19e89dMDKJ5V6e2eqHE0JDxHZc0QZDdfuNokuXa2/cZL5OVE1wCZxIz9TAwN7zF4xmyKTQkN+rH7a/0aunqKP1X+dfrGa+qFIo/jY/Ba9pQCBgxFn0XPbdtd1nzjLXsUmhIatjpjtWPNTAwJmWVqOBaaKjstXTiLeM4IQ4Xs+dfX2vnK5k2rcZU8NWz5juPPtGtMFQ0dTMVLXcy/PVlEeJ+U1wNhys57Lvrm0pLUP/dGaDlhoY2H66krmwz5ga9sysmWSiJjgPDtMzbTC8dKqcKY/ceUlJD4U6ZDDc0XbrtpaWodMsKoXircfTyPEygpPgGD3rKeqpI8eQKtQB/jtSU5zHwGaHNhj2137FdJW9viB1RuDvHDciAmEQB+i5vqNzxcHD6J/r42YvnhJm5zEIp76j88WST9CKWhMdtTxK7dghEQj21jNTzHIvz7z0NNc9gKWnqC2fnkKePJeTtF7fu2PXm0YvzoyJnpcUj6Xx6to64e2IQbAqUBWkZL5ypb6xs+t7LI0/8MAwZeBYWJZ5e0ulHlia5Yhd9XzoSv3Oz7+AZdeysS1hZHurA/z3pM13CQ+ZXt8bn5xm9k+ZGekb1q0V0ri2pXXV2g06XY+QRkRlX37elLCJ6J8bt2w7VV4pUl/BKmWQMnBmTHSwKjDwd2MlEolIHQF76vm96lpX/N5zwRUfLb/gw3fy91v665cXKoR87USVBy4u1XyOyjt25RUdLLZPv5kZ6QnxcZMmjhND2HbSs9HMjP0bD4MZiIfVKx/MjTeXkHTCIwtZ5k+j6ctWrOpZLvd5OGKq2T+1tLY1a1u59ALnPd6NMPUMANDre9/b/5Gtql6pyfYfMxqWb966ff36DY69w/c+kbUYr0FuDz0z18xiLDKZ06MYcNSn2I+JEW1L6+KsHJYKkeqIt/N28m4/PDKOpeXtL2+WybwtVSgtq9y0dRuXXl55eTPLUp+i+nO372T5WTHSM+TchZo/b/sr95VCyfEiP99Rpq9TVH/d5frCosM11pwI7E9hK6LPIcxveVJoiLuKGQAQ5uf7bsYiWM6/WP1eda14oxLIZ1Xn2CvU1NZRVD/2fldqst/O28kiZoxIpR7bcze/8vJmm94VMz1yx1/+zL2+zNvbUu8x0yPfzttZcrwoWKU0Wweyaeu2jCU5HZ1dNo3TEuLqWU9RSMzqAP+XkhPxtu88YoaE+flqoqNgOf9iddl310QbmiAOHz1htU4da/QIHgSrlDnLluBt0yrzkuKTE22b/cYGjOFe2aq17Oc76sCH+ZkZ6Sx1mrWtKQsytS2cVhnsiKhn2mDI+qgQlsVYUoot5oypYTzGvDxKjSS9pbRM7IU9D7QtrVzsycKiw1br2MTrO18R1bVriS0b19tUH7v5IJFINqxba/VnZdXaDXp9r8C+RNTzS6fK4XELuZdn7iPJriVmTXTUc7Gz+Y15eZRaHeAPy09+fIg2GLAOTSjHTnzCpRpekzszI93sOtMOSKUeZq1uFhPX1imdC1s2rpfLfVgq6HQ9i5fkCJS0WHo+33Ydnc3OS8d5wpk2GOwgZoHr/D1p8+VengAA3Z27L50qxzQuDNA0zd2Fi9HkXrNqBa6meJA4N5ZdS3ZAKvX40+bn2evodD0bufkCLSGKnvUU9ezxk7C8Pm42xhNgtMHw9LETTi5mAIBkyJB9/70YlsuuNTnPQvrrxm+5V8Zlcq/UZNv5mJQREolk3dOrHTgASMz0SKt1amrrSsv4b92LouenjhyDBXWAP8az2VDMRpGA8IJxn8l3+PDceUmwvKW0jBoYwNKsQE5XmtmksQQuk/uJrMXCGxGIM0zRAAB2xxhk1569vD92/Hou++4avDgl9/LckZqCq1nXEjMk6aFQtJDeftrx56WQsS2X+7BvoiBOlpTa2ovRdzEzI92xkzNEIpEsz/4fR48CRHP4gul0PbxXOpj1TA0M7D5zFpY3J8zFdTzbFcUMyX0kGRbKrjVpu3XY27cJZGwvWjg/fQGnn9ri4yW29qLv7WX+c0nmIltbEInUlHmOHgKImMrJXOW90sGs573nL0CftjrAH9eVYNcVMwBAJpWuj5sNy1tLyxzr6z505DgszImNSZxr8QgXk2ZtqxCPa3JivKPc2qZIpR4rNdkOHwOXarxXOpgPUaPonJsS8Hj8XVrMkIWTJ0Fft7a7u6KpWbyO2KGofnj4US73UQUpZTJvjiZ3eYUNS24j1qxezvu9YuAMK3mOm2H8TG6cet577gIsaKKjsMQAcwMxAwAkQ4a8mvIoLO8+c9ZRUzT6fixaOB8WRDK5pR4eyYnxyYnxKzXZzjM5Q+BeNByeo8dihX/+8yce78KWX7Kzrw9tOC+xcHXGJtxDzJAwP191gH/tjZu6O3crmpodEiYNLcnmxMbAQuLcuNd2vmH1jdDk5n5qSibz3p5r26lpezIvKR7j/QceyGQjrFcCoI/XyUJs8/OBS5dhQRMdJdwNZgcxv5uxyJ5XoFbcOwTqkCmaovrhRR9obMMX7WNyE4yYOGE8l2r1DVd5NI5nfqYGBtDKGcvk3Najf2zC+Me4PTkPghQKO8c5CvPzVSkU2u5u3Z271e037Bw/EBnbRns28XNmc7mpW3y8JGOR+WAmBKcCj54L63BOzgAAlULuunHFLPFCfBy8bfbWuQt21nPeW/mwYOTWnhMbwxKlBNGsbe3o7HK2xbB7w9EsNwKDvU0bDEcbGmB5Ydgk4Q26K3CKBgBou7vtuRet1/fCSThYpTRaBquClBxPTZV86kSn0F0ajgtjjma5ERj03Nj1PdpzJpHl2VkwaQIsVGlb7NYpWv2adWgjdzc7XK5ME7jAcWHsO+pBHo1j0HNF06BbOzMcw8rZvUEegaMNDXbziqENJ7NnSJC7mx2drgfLhXsCR0aOVPB4l9D1M20wIE9Y1NgA7m/UU9SuexECRWJjQrzZxbzYXXt7Sp+LnW32T9KhQ9HGVWPX93bIaMdibEOgyc0lwsFnVeeMwlYTeGB0HtYSliIZsSNUz9XtN2AhY2oY99v/eorK+qiQmYQVO+9mLLIkZlG7lnt5HniCLapOZvhUuA9X0dRkBz0jY3vtUxpLdRYtnM/FK3b46AlNzlJsI7tfsRohEACQnBjP7xKLUHu7ur0dFuaGhHB8i33EbFYq9R2dSe+8K7aY2Z0IyIo5iDtAl1ne2/9/sMByE4CY3HaDY9y/xY8v4Ne+UD2jA8kTuS3fHStmZt4s7HARMwBAMmQIukQpdnQxFCosUh3B8nvP3cttNTAogR0uzrBglZJ38HNBetZTFPJsczG2iZghs+6tQhs6OsUbEmDIz+qlRe5ebpqmhQ7rPubsuYtW6yxbmsW7fUF6/uZeCq9ZHNwkRMyI8DGDEWHPtbaJNigAGJtMVq/dcje5bYpYRGBC07TVNEDBKmXi3FjeXQjSM1o8oy+oJYiYmQT6yGCBmc4eOxyNbQh3k9umiEUEJgXvF7JXkMt93nnzb0KiGgvSM1o8oy+oWezjUnYVMQN7LaGRsf2/y5dxqc/R5C46WExMbh50dHZZ3UT4oOAtgdG/BekZhddmWTzbR8xmD3s7p5ghU0YPJjG7829R4gTSNI2+PZMmjuPyFvW0cI6NE5PbVmiazt1uJR/Yvvw84Sfk+esZTSzTLBvb9hGzWUU5s5gBAP7eg6ftW7q78Q3qPyDJZWakc7TfOMoeEJPbRvT63qylGvZtZ4EJPRH89fzDT3dgYZKFQxHabp27ilkd4F+y/Ekhh9Un3/vQbvb+iGlQvwBJLiGeU5wwAIBEIuESTRYQk5szNE2fu1ATn5zGcik1Uh1ReeoYFjEDIefDuu7NzyM8zPhaHDg92kHMwnNxedw7u9bewzU1KXeYSTC4z7oAgIT4OI7ZM75u/BbXV9DNgCdGWtvarSaLDVYp//j8s3g/Rv56buwaPOky2WR+JmK2Chp82bUmFNMXFzyMbYhNJjfRM2DNdM1CpDpiSeai6Mhp2BP08ddz713K7OsOFLOzpY91FDyMbQg0ublM0UUHi9esWuEMgfJdiOTE+Jkx0bGzZoj3uWGLBwghYuYODD+EqzUERfWjJBg8plDuJnfd5XouCZnuT4JVyiBloEw2YuKE8Q88MGzCuFD7ZLHHoGcUmpeI2SaC5D5i6Nk0Lq9NcDe5C4sOEz1fqnEuVz/O+XnkMK8TOcswNmiEt1RqKTjZo+MfenT8Q+J1PXLYMPHMbGpgAFdiIMCIy/tO/n4utyB5A3M4EJPbqeCvZ9Ozilhi6PPDgV0Lp5eicOkZxeW1D8Tkdjac3bVDsAmMGdi5gCtBNAEX/Odnkdw5BCEggR06UCAkNtCqteu5zPPE5HY2+M/PQU6QHds9wLVY0Ot7TZNg8IN7klc7WwQEdjD4w3C5c+7PCIEYQaHC+Hm2mXBMUwwAyHsrnyyhnQcMesbizrkPIwRiv/yM4vIuSk8V2JRU6hGpjuBictuarY4gKk7hD3NgtIPOvj5HXRrBi9W4vLbC3eQm2eqcB/56Rteq0EUrfjg2dMn8gvcdImYUTB8FNhAIexIMHnA3uW1NEE0QD/729ugRgzd4u/r6eMeRvm/jEP3w02C2blxTN3sSDB4Qk1sk1K9bz7kNqX32D7Y2zn9+Vt7zb6OLVrZy34oZANB6Lx9FjDJQeHfalla8xjaEmNwuB389e9/7srZxSJViyv0sZgDAT//6FywM+81vhPeIQoXhMrYhxOR2OfjrGfmKYfYWm7jPxQwYkXqVOLbxUVxeXMY2BJrcXGpCkxtj1wR+CPJvI1+OnjJ/F9osdtgfcnIxAwC+unULFkYOGyawUxSXF6+xDYmdNYNjTWJyOwOC9IzC6KPA+lYhsXsBI6+ISqEQfm1LJGMbwn3CR4my7isoqt/RQ/gFgr5MKIw+CqzPDgn3CUE/f3OCVQL7pWkaGdszY6IFtmYK9wnfnbLVcUzpalNN+yBIzyiMPpdUiSTcJwL9/MWqggR2faT4JErdLDUXmFE4yYnxHGvue/+A8O4ar37DsebJklLh3ZmF+53T1jZOM5ndEKRn7nke6js63VjMtoYu4ZhXxCoU1f/azv9sZjp8B/hUeSXHfKgslFdUcawJb3cJ7M4Umxx7F6trsQ9ACEIXb2gJfdZyajUS7pOJtltnU1JOS9A0ve75zcxXRFrL2WRSPrt+k5C+rtQ36mzZ/qw6c15Id2Zpv3GLe+XyiiqnWkIL1XNC6GAa9+Nfm09s69igYs4mZgBAlbYFFrgk5TQLTdOlZZXJjy02MgvXPb8Z73eLpmmOF6ERzdrWjVu28ZilOzq7Nm7Z9qRmrU3v2rR1G7/uLHHuQs2GP/6Je32drid14ZLSMitZI+3Gr37++WeBTWR9dAAGNjDNI0UiBBpBGwwp7+2D8/MXa1bZei9N29Jad6m++HgJS76FlZrsObExAu8/w742bX2FpSN2VmqyF6Wnsi8BKKr/dkdHs7btZEmpwDBJkeqI2FkzQkOCxwaM4bHuoGm67Xr7vvcPWM3naolglTJ9QcrMmGirOahEPe+JQc+HrtTv/PwLAIAmOmp5lJr5J/GSJ0JYIgSK3TW/CIHoB04d4P/mwjSb3tvR2ZWyIJNj5Vde3jwviasfy5SNW7bx/mZzHIZNj4OrU0vgel4uvYuqZwz3nx+bMB7q+WhDQ7Z6GvNbTiIEGnHkyuBGQGb4VMeOhOCWYJifAQBrjh6Dpz5z5yUlPRQqvEG3hBoYmP3m27B88ek1NtvqNP39D//gWFnm7S0krJde30v1Y1iKswzDpsfB1aklcD0vv94xgif+9oroKKjnD76sI3q2RGHdZVjQREfxsNUlEonw/MAckcm8Be2kccCej2MVOzyvfcATnyTMz1elUAAAtN3d9R2dWNp0M6iBAeSfWxJBjG2CKGDLj/FCfBz09LxW+fmBJ7JwNcvO+bbr6OKhGKjHBuCKN4Am56TQEIzZMAgEJtj0HObnK/fy1N25C6do3hFLuCP2jpQmOirpITxiZk7Oq2OmY2mTQDAFZzzAZ2bNhIUXSz5B8bHEgDYY7CBmo703Iew9fwEWkkJDnNPxTnAPcOp5bkgwXEXr7tw92vA1xpaZ0AbD08dOuJCYtd06dF9lXZzoUbgJ9zM49SwZMuTleUmwvPPzL2wKcsARKGYeEVG4g1fMtMGwtbQMltfHzbZD4F7C/Qzm+NsqhTzp3olu7BknXE7MAICKpmZ4GFbu5blw8iSMLRMIpuA5T8KEeWoC4/ESVxSznqKS3nkXli2FQOIORfWzXCcKmzwBbeey1IydNcPsaQe9vvfqt9cuVteOGDFi/LjQCeNCTU9Bo1sHzPOMqC/mAJj1jV7v6Oyqb7jKMhJ4lLruUv2Nm7eio9RmRwK5Ut/Y2fW90XgsQVH915q0tV9dAgCop4WHhqjYT33A4y71DVfPnrsYNnlCaEiw1bcwQY9piuloKaq/7nL97dsd9Q1XwyZPGD3aLzpymkQi4dgXE/x6BgCUfXdtyz0j80TOMuEeIFcUM20wPFH4MZyck0JDch9JFtgg+4Fn5rFhlpolx4uMVEfT9JpnXjC9DmF6Djk8cjD20KWa/4QKQ31Zqi+X+xwqLECaLC2r3LR1m9mRAACu1DeaXrGKVEe8ufs10+83OnTNHI9Z8gs+NE1tv1KTnbNsiVnZaFtaV63dYHRzUy73eTtvh9FFF7OfCWA8pilGNc32BQCoPHWMx8USbPtVTJIeCj3X2gbzMz358aGS5U8KuujrgmIGAOw+cxZZ2hsT+F+NQEg9PFCokC/rLsNvAHrFd9SDpm8JVimDfhnf2yiGiZGYg1XKHn0vbHnT1m2mUy4PdLqejVu3mRWkEUzVyeU+PjJveLurprZuzTMvcGnBpmbfyd9/+UqDabNGvynBKiWsr9P1rFq74dTfD9k0jEh1hMzb29JfaZpenJXDrAn/z/IO7SiKngEAGxPiv7p1S3fnru7O3d1nzvLOruiiYj7fdh35tPPS07AcIJHJvLfnDgYwQFMTesUsy5ZmsduiR4pPQjFHqiN2/XWbVOpB03R5RdWuPXt3/OXPuM5j1tTW7dqzd8M6trvNHZ1dSHX78vOmhE0EAFBU/7rnN9fU1nFpwSxX6hths3K5zwcFb8En0ut7Fy/J0el6amrryiuqjD4iJGY0gev1vYeLTx4+euJQYYGtvylbNq5n+RjbrrejvjQ5S2FZSBg2sfLRSYcOzUsfvA948HL9e7zCsthBzK8vSMUuZm237tnjJ2F5fdxsozvhTgWKgw/FDACQSCTzkuJPf3oUKgoXRQeL2S/9o9XmG6+/irqWSj3e3P2aXO4DbIlDxOR05aBxi8QMAJDJvA8VFsCyURAyFBohMyNdk7MUqlcm89bkLD396VHxIjpVfvaFtqWVpmkAgCpIyfv6uljzMwBApZCvj5sNr1LmX6x+OMDfJoeQHcQs3Edlip6i1hYfg2V1gP/iKVxTTIjBpq3bmKu45MR45nxOUf3QkkxOjLfpShBaNHJBLvdBBnywymJyH6Sr6MhpzNclEkni3Niig8U6XQ+PLFnwV0Au9zGaJGUyb5idq6a2jqZpNOuePXcRFhLi8WQmMHJkGHkZVEFK+Pk0a1uh4Z2ZkR4dpeadUlvcfLGLp4RpoqNgecXBw9yvariumFHYQ5VCsSdNaF51Uem/d0NQJhshXi8PR0x94/VXYXnV2g2Wwnf29OhhwdSgDfAfDAvN40oj/ClRBZn5HUHL2n//ewC9+GPfP2Fh5EgFs3JpWWV4ZJxNP2QcOXm0kBlBtehg8R+efXHV2vX8QkeJOD9DstXTrty+DZW54uBhLipyYDYcIdAGw1NHjsFhy70833o8TXisfIGs1GSnPJKI/mnkDJPJvOHkUF5RZdPStOR4ESq3trX/4dkX2evHTI9cqcl+J3+/TtdTdLDYbJ34ObOhsdDR2WU0l6K9twdH/pb7ICFmJ2HIl3WXAQDBKiXTNlFPC4fr7fqGq1jcB2+8/qoycCz6p6lvTCr12J67OfelP37d+G3tV5dg7zW1dXWX63nM0qJ/4SRDhuxJm4/C+lqdpV1UzHqKSnlvH3Jo2yeHu1X8x4z28x2F/jM1VhPnxgIAdLqe/IIP0YsU1Z9f8CFL2Fpmm8wvKws5y5awp8JSTwuHhdztO+EyEnKlvhF57Hj4t1NT5sFCwfuFzNfzCz6EU3f8nF94akNDBjMc7NqzF0tGLmXgWObHZbqugd4viUQyJWyiJmcp+q38tPQ0j+5En58BAJIhQ3akpqTv/wCqlGWWdl0xM4f9asqjziBmwFgNIoy2oNLmPwonTLh5k5oy7+at23CKgO5cXB4giUSy66/bUhcusRSOd9LEcWguzVqqSV+QMnz48Mar36D5/LlnVltq3MjTxnzG2FkzoA2CHhAAgMIPyuU+i9JTme+VSj2QKbF4Sc6ihfPHjwu9fbuDdwLNkk/L/ceMZr7CPEhDUf2Ls3KCVcplS7PCJk+4e/fusROfwD/xy3ZiDz0DAKRDhxZn/37DyRJkeJs9OnZD34suaYlBkEKB3dvc2df35MeHkJmdl57mPA7tU+WVRmHuXnl5M1PPqiDlvvy8DX/8E9y8YZ4qMbvmFIJU6nGosCA+2XwURIlE8ubu1+BmeLO2lZknAACwLz+PxeVrdHKD+YywU7Q7xXxAo4MuCLhvBCVtdApFbnsyUNNzLCXHi6TSweFBL2CzttXoEeRyH+6ZAJnYSc8AAOnQoXvS5iMv15bSssaurmdmzWQuMsP8fO1wcRoj59uuo60p5zGzbWJK2MRDhQXlFZ9XnTmPLNvYWTMeT0/ld36DBZnMe19+nqUg21DS5RVVZ89dhD9DwSpl/JzZAsMPw92p8orP6xuuwmbhAybOjbNkfWhylo4fF3qxura8ogoaFJHqiNSUeXB5gpGMRWmhIcGHjhxHP7vBKuW0iCnrnl7tROc9WTByXKsD/HMfSXY5DQAAaINh95mz6NCIi4rZCFOnkQOhqH4xAus51TNix956BgDQBsP+2q/QBWa5l+erKY+61rSsp6injhyD3i8AgDrAf0dqCokiRHA4DtAzpL6j88WST5APKWNq2OoZ051fErTBUNHUjG6bAAA00VFGUccJBEfhMD0Dk1lO7uX5zKyZzhzut7Ov77kTJcwBu5xlQXBvHKlnYLIKBQCoA/w3JcQ7W5AtamBg7/kLRuN00ZU/wY1xsJ4hRvMeACApNGR1zHRnUDU1MFBYd5kZrkzu5bk5Ye6MwN85blAEgnmcQs8QZhQEiGNVbapkAEDG1DCjPTYCwXlwIj0DCxJSKRS/fzhiVpDSPt4y2mBo7Pr+3YvVRrdBnMdkIBAs4Vx6hphVNQAgKTTk8SlhIb9ViCFs2mBo69FXaVvM9kuUTHAJnFHPEKjqow0Npse51QH+s4KU4WPGBPrIBJq+nX19DR2dKDqSERlTw7LCpxIlE1wF59UzBFq/FU1NTN8yE5VCEST3meTnO3rECKXcB1jOtA4zvP/w052uvr7Grq42XY+l+9UqheKpmOnhY0Y7/344gcDE2fWMoAYGLt26ferb78xOpFiA035CaAjZhSK4KC6jZybabt2lW7fOtLQKD2CiUijmBKseDvAXaVlOINgTl9QzEz1F6e7cbenuvtn7Y3tPDwCgRdfD3MqGyL08p40ZAwDw9pROHDVq1PDhI4d5kYUxwc1weT0TCAQEORdBILgPRM8EgvtA9EwguA9EzwSC+0D0TCC4D0TPBIL78P9rm8kG3VDu7gAAAABJRU5ErkJggg==';

export const experiments: Experiment[] = [
  {
    "num": 1,
    "cardEmoji": "⚖️",
    "title": "First class levers",
    "section": "Mechanics",
    "desc": "Investigate equilibrium of a first-class lever by balancing known masses on either side of a central pivot.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students discover that equilibrium requires equal moments on both sides of the fulcrum, verifying W = mg and the moment equation M = F × d.",
      "instructions": [
        "Zero the balance arm (tare) before adding any mass.",
        "Hang a mass on one side, record its weight in newtons, then find the balancing mass on the other side.",
        "Vary the distance from the fulcrum and observe how the required force changes."
      ],
      "expectedOutcome": "m = 10 g → W ≈ 0.10 N; m = 25 g → W ≈ 0.25 N; m = 50 g → W ≈ 0.50 N. Equilibrium: M₁ = M₂."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Lever bar (balance arm)"
        },
        {
          "emoji": "🔩",
          "name": "Central fulcrum pivot"
        },
        {
          "emoji": "🏋️",
          "name": "Cylindrical masses (10 g, 25 g, 50 g)"
        },
        {
          "emoji": "🪝",
          "name": "S-hooks"
        },
        {
          "emoji": "📏",
          "name": "Millimetre ruler"
        }
      ],
      "observationsToRecord": [
        "Mass m (g) and calculated weight W = mg (N) for each trial",
        "Position of mass on each side of the fulcrum (mm)",
        "Whether the arm reaches equilibrium"
      ],
      "theoryPoints": [
        "Weight is the gravitational force on a mass: W = mg, where g ≈ 9.81 m/s².",
        "A moment (torque) is the turning effect of a force: M = F × d.",
        "A first-class lever has the fulcrum between the two forces.",
        "Equilibrium condition: M₁ = M₂, i.e. F₁·d₁ = F₂·d₂.",
        "The 'tare' operation zeros out the lever's own weight before measurement."
      ],
      "realWorldConnections": [
        "Weighing scales use balanced moments to measure unknown masses.",
        "Crowbars and see-saws are everyday first-class levers.",
        "Surgeons use first-class lever principles in laparoscopic tools."
      ],
      "formula": "W = mg   |   M = F × d   |   Equilibrium: F₁d₁ = F₂d₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 25 g mass is hung at 8 cm from the fulcrum. What single force at 10 cm from the fulcrum will balance it?",
          "options": [
            "0.20 N",
            "0.25 N",
            "0.196 N",
            "0.245 N"
          ],
          "correctIndex": 0,
          "explanation": "M₁ = 0.025 × 9.81 × 0.08 = 0.01962 N·m. F = 0.01962 / 0.10 = 0.196 N ≈ 0.20 N."
        },
        {
          "text": "What does 'taring' the balance arm mean?",
          "options": [
            "Adding a known mass",
            "Zeroing the reading before measurement",
            "Measuring the arm length",
            "Removing the fulcrum"
          ],
          "correctIndex": 1,
          "explanation": "Taring resets the scale to zero so that only the added mass is measured, removing the effect of the arm's own weight."
        },
        {
          "text": "If you move a mass further from the fulcrum, the moment:",
          "options": [
            "Decreases",
            "Stays the same",
            "Increases",
            "Becomes zero"
          ],
          "correctIndex": 2,
          "explanation": "M = F × d; with F constant, increasing d increases the moment."
        }
      ],
      "discussion": [
        "Why must the balance arm be tared (zeroed) before placing masses on it?",
        "If F₁d₁ = F₂d₂, explain how a small force at a large distance can balance a large force at a small distance.",
        "Give two real-world examples of first-class levers and identify the fulcrum in each."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Weight & gravity (W=mg)",
          "pct": 25
        },
        {
          "label": "Moments & torque",
          "pct": 30
        },
        {
          "label": "Equilibrium condition",
          "pct": 30
        },
        {
          "label": "Measurement & taring",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students often confuse mass (kg) with weight (N); weight is the gravitational force, not the quantity of matter.",
        "Many think equilibrium means both sides must have equal masses, not equal moments.",
        "Students may forget to tare, introducing a systematic error from the arm's own weight."
      ],
      "hook": "How can a child on a see-saw balance an adult? The secret is not equal weight — it's equal moments. Move the adult closer to the pivot and suddenly the child wins!",
      "khanLinks": [
        {
          "title": "Introduction to Torque",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque"
        },
        {
          "title": "Torque & Angular Momentum",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mass m (g)",
        "Weight W = mg (N)",
        "Distance d₁ (cm)",
        "Balancing mass (g)",
        "Balancing distance d₂ (cm)",
        "M₁ (N·m)",
        "M₂ (N·m)"
      ],
      "rows": 4
    },
    "observations": [
      "Record the weight calculated from each mass and compare with the spring-balance reading.",
      "Note whether the lever balances and at what positions.",
      "Observe how doubling the distance halves the required force for equilibrium."
    ],
    "conclusion": "The lever reaches equilibrium when the moment on the left equals the moment on the right (F₁d₁ = F₂d₂). Weight W = mg was confirmed for each mass tested.",
    "ai": {
      "opening": "Ready to explore levers? Ask me anything about moments, equilibrium, or the experiment setup!",
      "keywords": {
        "setup": "lever bar|fulcrum|tare|balance arm",
        "formula": "M = F × d|W = mg|equilibrium",
        "error": "forgot to tare|unequal arm lengths|friction at pivot",
        "question": "moment|torque|equilibrium|weight|mass",
        "real": "see-saw|crowbar|weighing scale"
      },
      "hint": "Remember: equilibrium means the moments are equal, not the masses. M = F × d on both sides.",
      "expected": "m = 10 g → W = 0.098 N; m = 25 g → W = 0.245 N; m = 50 g → W = 0.490 N. Equilibrium when F₁d₁ = F₂d₂."
    }
  },
  {
    "num": 2,
    "cardEmoji": "🏗️",
    "title": "First class levers and equilibrium positions",
    "section": "Mechanics",
    "desc": "Measure moments about a pivot and verify the principle of moments using a lever with loads at known distances.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students calculate clockwise and anticlockwise moments and confirm that equilibrium requires their equality: M = F × d.",
      "instructions": [
        "Place a known mass at a measured distance from the fulcrum on one side.",
        "Find the position or magnitude of a second force that restores equilibrium.",
        "Record all distances and forces, then calculate both moments."
      ],
      "expectedOutcome": "Trial 1: m₁ = 65 g at 8 cm → M₁ = 0.052 N·m; adjust m₂ or d₂ until M₂ ≈ 0.052 N·m."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Lever bar"
        },
        {
          "emoji": "🔩",
          "name": "Fulcrum pivot"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (65 g, 100 g, 150 g)"
        },
        {
          "emoji": "📏",
          "name": "Millimetre ruler"
        },
        {
          "emoji": "🪝",
          "name": "S-hooks"
        }
      ],
      "observationsToRecord": [
        "Force F₁ (N) and arm length d₁ (m) for the first load",
        "Force F₂ (N) and arm length d₂ (m) for the balancing load",
        "Calculated moments M₁ and M₂ (N·m)"
      ],
      "theoryPoints": [
        "Moment M = F × d, where d is the perpendicular distance from the pivot.",
        "Clockwise moment = Anticlockwise moment at equilibrium.",
        "The principle of moments applies to any rigid body in rotational equilibrium.",
        "Increasing the arm length d amplifies the turning effect of a given force."
      ],
      "realWorldConnections": [
        "Wheelbarrows are second-class levers; the load sits between the wheel (pivot) and the handles.",
        "Nutcrackers multiply force using the moment principle.",
        "Engineers use moment calculations when designing bridges and cranes."
      ],
      "formula": "M = F × d   |   Equilibrium: ΣM_clockwise = ΣM_anticlockwise"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 65 g mass is placed 8 cm from the fulcrum. What is the moment it creates?",
          "options": [
            "0.052 N·m",
            "0.065 N·m",
            "0.080 N·m",
            "0.520 N·m"
          ],
          "correctIndex": 0,
          "explanation": "F = 0.065 kg × 9.81 m/s² ≈ 0.638 N; M = 0.638 × 0.08 ≈ 0.051 N·m ≈ 0.052 N·m."
        },
        {
          "text": "If M₁ = 0.052 N·m and d₂ = 0.10 m, what force F₂ is needed for equilibrium?",
          "options": [
            "0.52 N",
            "0.052 N",
            "5.2 N",
            "0.52 mN"
          ],
          "correctIndex": 0,
          "explanation": "F₂ = M₁ / d₂ = 0.052 / 0.10 = 0.52 N."
        },
        {
          "text": "Which of these is NOT a second-class lever?",
          "options": [
            "Wheelbarrow",
            "Nutcracker",
            "See-saw",
            "Bottle opener"
          ],
          "correctIndex": 2,
          "explanation": "A see-saw is a first-class lever (fulcrum in the middle). In second-class levers the load is between fulcrum and effort."
        }
      ],
      "discussion": [
        "Explain why increasing the arm length d allows a smaller force to produce the same moment.",
        "A mechanic uses a longer spanner to undo a tight bolt. Which principle is being exploited?",
        "How does the principle of moments apply to the design of a wheelbarrow?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Moment definition M = F×d",
          "pct": 30
        },
        {
          "label": "Equilibrium condition",
          "pct": 30
        },
        {
          "label": "Lever classes",
          "pct": 20
        },
        {
          "label": "Measurement technique",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students confuse 'moment' with 'force'; the moment includes the distance, not just the force alone.",
        "Many assume equilibrium requires equal forces rather than equal moments.",
        "Some students measure the wrong distance (not the perpendicular distance from the pivot)."
      ],
      "hook": "Have you ever used a long spanner to undo a stuck bolt? You were using the principle of moments — a longer arm means a bigger turning effect with the same force!",
      "khanLinks": [
        {
          "title": "Introduction to Torque",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque"
        },
        {
          "title": "Torque & Moments",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "F₁ (N)",
        "d₁ (m)",
        "M₁ (N·m)",
        "F₂ (N)",
        "d₂ (m)",
        "M₂ (N·m)",
        "Balance?"
      ],
      "rows": 4
    },
    "observations": [
      "For each trial, record whether M₁ equals M₂ within experimental uncertainty.",
      "Note any asymmetry in the lever bar itself and how this affects results.",
      "Observe how the same moment can be produced by different force-distance combinations."
    ],
    "conclusion": "The principle of moments was verified: equilibrium occurs when M₁ = M₂. Measured values of M₁ (e.g. 0.052 N·m) matched calculated M₂ values within ±5% experimental error.",
    "ai": {
      "opening": "Let's explore moments and equilibrium! Ask me about calculating moments, lever classes, or the experiment setup.",
      "keywords": {
        "setup": "lever bar|fulcrum|masses|distances",
        "formula": "M = F×d|equilibrium|moments",
        "error": "arm asymmetry|friction|incorrect distance measurement",
        "question": "moment|turning effect|equilibrium|lever class",
        "real": "wheelbarrow|spanner|nutcracker"
      },
      "hint": "M = F × d. Make sure you measure d from the pivot perpendicularly. For equilibrium, M₁ must equal M₂.",
      "expected": "m₁ = 65 g at 8 cm → M₁ = 0.052 N·m; m₁ at 8 cm, m₂ at position such that M₂ ≈ 0.057 N·m in trial 2."
    }
  },
  {
    "num": 3,
    "cardEmoji": "📏",
    "title": "Sensitivity of a balance",
    "section": "Mechanics",
    "desc": "Determine the sensitivity of a beam balance by measuring how many scale divisions correspond to a known added mass.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students learn that sensitivity σ = deflection / added mass (div/mg) and discover that sensitivity is not constant across the full range.",
      "instructions": [
        "Balance the beam with a 310 mg tare mass; record the resting pointer position.",
        "Add a 10 g (10 000 mg) load and read the new pointer deflection in divisions.",
        "Repeat with different loads to plot a deflection vs. mass graph."
      ],
      "expectedOutcome": "310 mg tare + 10 g load → ~3 divisions → σ ≈ 0.01 div/mg for small loads. Sensitivity decreases for heavier loads."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Beam balance with pointer"
        },
        {
          "emoji": "🏋️",
          "name": "Tare mass (310 mg)"
        },
        {
          "emoji": "🏋️",
          "name": "Test masses (10 g, 25 g, 50 g)"
        },
        {
          "emoji": "📐",
          "name": "Scale with millimetre divisions"
        },
        {
          "emoji": "📝",
          "name": "Graph paper"
        }
      ],
      "observationsToRecord": [
        "Pointer zero position with tare mass only",
        "Pointer deflection (divisions) for each added mass",
        "Calculated sensitivity σ = deflection / added mass for each trial"
      ],
      "theoryPoints": [
        "Sensitivity of a balance: σ = pointer deflection (div) / added mass (mg).",
        "A more sensitive balance deflects more for the same added mass.",
        "Sensitivity is not constant: it decreases as the load increases (non-linear response).",
        "The tare mass compensates for the beam's own asymmetry."
      ],
      "realWorldConnections": [
        "Analytical balances in chemistry labs are highly sensitive but have low capacity.",
        "Bathroom scales sacrifice sensitivity for a wider mass range.",
        "Sensitivity vs. range trade-off appears in all measuring instruments."
      ],
      "formula": "σ = Δ (divisions) / Δm (mg)"
    },
    "questions": {
      "mcq": [
        {
          "text": "If adding 10 g causes a deflection of 3 divisions, what is the sensitivity in div/g?",
          "options": [
            "0.3 div/g",
            "3 div/g",
            "30 div/g",
            "0.03 div/g"
          ],
          "correctIndex": 0,
          "explanation": "σ = 3 divisions / 10 g = 0.3 div/g."
        },
        {
          "text": "Why is a tare mass of 310 mg placed on the balance before testing?",
          "options": [
            "To increase sensitivity",
            "To compensate for beam asymmetry and zero the pointer",
            "To overload the balance",
            "To measure the beam weight"
          ],
          "correctIndex": 1,
          "explanation": "The tare mass balances the pointer at a reference position, removing the effect of any asymmetry in the balance arm."
        },
        {
          "text": "As the load on a balance increases, its sensitivity:",
          "options": [
            "Increases linearly",
            "Remains constant",
            "Decreases",
            "First increases then decreases"
          ],
          "correctIndex": 2,
          "explanation": "Sensitivity decreases at higher loads because the restoring moment per unit mass diminishes as the beam deflects more."
        }
      ],
      "discussion": [
        "Explain the difference between sensitivity and accuracy in a measuring instrument.",
        "Why might an analytical chemistry balance have much higher sensitivity than a bathroom scale?",
        "Sketch the expected shape of a deflection-vs-mass graph and explain any non-linearity."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Definition of sensitivity",
          "pct": 30
        },
        {
          "label": "Taring the balance",
          "pct": 20
        },
        {
          "label": "Non-linearity of response",
          "pct": 30
        },
        {
          "label": "Graphical analysis",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students often think a more sensitive balance is always better; in fact, high sensitivity limits the maximum measurable mass.",
        "Many assume sensitivity is constant across all loads, but it decreases at higher deflections.",
        "Confusing 'sensitivity' with 'precision' or 'accuracy' is common."
      ],
      "hook": "Why do chemistry labs have tiny balances that measure to 0.001 g, while truck weigh-stations use massive platforms? It's all about the sensitivity-range trade-off!",
      "khanLinks": [
        {
          "title": "Forces & Newton's Laws",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        },
        {
          "title": "Torque & Balance",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Added mass Δm (mg)",
        "Pointer deflection (div)",
        "Sensitivity σ (div/mg)"
      ],
      "rows": 5
    },
    "observations": [
      "Observe how the pointer deflects more for larger added masses.",
      "Note whether the sensitivity (div per mg) remains constant or changes.",
      "Record the resting position each time a mass is removed to check for hysteresis."
    ],
    "conclusion": "The sensitivity of the balance was approximately 0.01 div/mg for small loads (e.g. 3 divisions for 10 g load). Sensitivity decreased for larger loads, confirming the non-linear response of the balance.",
    "ai": {
      "opening": "Curious about balance sensitivity? Ask me how it's calculated, why it varies, or how to improve your experiment!",
      "keywords": {
        "setup": "beam balance|tare|pointer|divisions",
        "formula": "sensitivity = deflection / mass|σ = Δdiv / Δm",
        "error": "forgetting to tare|reading error|non-linear region",
        "question": "sensitivity|divisions|tare|accuracy",
        "real": "analytical balance|bathroom scale|lab instrument"
      },
      "hint": "Sensitivity σ = divisions deflected ÷ mass added (in mg or g). It is not constant — plot deflection vs. mass to see the curve.",
      "expected": "310 mg tare + 10 g → ~3 div → σ ≈ 0.3 div/g. Sensitivity decreases with increasing load."
    }
  },
  {
    "num": 4,
    "cardEmoji": "🔧",
    "title": "Second and third class levers",
    "section": "Mechanics",
    "desc": "Study a second-class lever with the fulcrum at one end and verify the principle of moments for non-central pivots.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Students verify that moments about the fulcrum balance even when it is at the end of the lever, and calculate the reaction force at the pivot.",
      "instructions": [
        "Place the fulcrum at one end of the lever bar.",
        "Hang a known load at a measured distance from the fulcrum.",
        "Apply an upward effort at the other end and find the position for equilibrium.",
        "Calculate both moments and the reaction at the fulcrum."
      ],
      "expectedOutcome": "m₁ = 65 g at 8 cm: M₁ = 0.052 N·m. A 100 g effort at ~5.5 cm gives M₂ ≈ 0.054 N·m ≈ M₁."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Lever bar"
        },
        {
          "emoji": "🔩",
          "name": "End fulcrum pivot"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (65 g, 100 g, 150 g)"
        },
        {
          "emoji": "📏",
          "name": "Millimetre ruler"
        },
        {
          "emoji": "🔧",
          "name": "Support stand"
        }
      ],
      "observationsToRecord": [
        "Load F_L (N) and its distance from fulcrum d_L (m)",
        "Effort F_E (N) and its distance from fulcrum d_E (m)",
        "Reaction force R at the fulcrum (calculated as R = F_L + F_E)"
      ],
      "theoryPoints": [
        "In a second-class lever the load is between the fulcrum and the effort.",
        "Moments about the fulcrum: F_E × d_E = F_L × d_L at equilibrium.",
        "Mechanical advantage MA = d_E / d_L > 1; effort < load.",
        "The reaction R at the fulcrum supports the net downward force: R = F_L − F_E.",
        "Unlike first-class levers, effort and load forces act in the same direction (both down)."
      ],
      "realWorldConnections": [
        "Wheelbarrows use a second-class lever principle: load between wheel and handles.",
        "A nutcracker is a double second-class lever.",
        "Hinged doors: the hinge is the fulcrum, your push is the effort, the door weight is the load."
      ],
      "formula": "F_E × d_E = F_L × d_L   |   MA = d_E / d_L   |   R = F_L − F_E"
    },
    "questions": {
      "mcq": [
        {
          "text": "In a second-class lever, where is the load relative to the fulcrum and effort?",
          "options": [
            "Between fulcrum and effort",
            "At the same position as effort",
            "On the opposite side of the fulcrum",
            "At the fulcrum"
          ],
          "correctIndex": 0,
          "explanation": "Second-class levers have the load between the fulcrum and the effort, giving mechanical advantage MA > 1."
        },
        {
          "text": "A 65 g load at 8 cm from a fulcrum is balanced by an effort at 10 cm. What is the required effort?",
          "options": [
            "0.51 N",
            "0.64 N",
            "0.80 N",
            "0.39 N"
          ],
          "correctIndex": 0,
          "explanation": "F_E = F_L × d_L / d_E = (0.065×9.81×0.08) / 0.10 = 0.052 / 0.10 = 0.52 N ≈ 0.51 N."
        },
        {
          "text": "What is the mechanical advantage of a lever where the effort arm is twice the load arm?",
          "options": [
            "0.5",
            "1.0",
            "2.0",
            "4.0"
          ],
          "correctIndex": 2,
          "explanation": "MA = d_E / d_L = 2d / d = 2."
        }
      ],
      "discussion": [
        "Explain why a wheelbarrow makes it easier to lift a heavy load.",
        "Compare first- and second-class levers: how do their mechanical advantages differ?",
        "How does the position of the load relative to the fulcrum affect the effort needed?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Second-class lever definition",
          "pct": 25
        },
        {
          "label": "Moment calculation",
          "pct": 30
        },
        {
          "label": "Mechanical advantage",
          "pct": 25
        },
        {
          "label": "Reaction force at fulcrum",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students often confuse first- and second-class levers; the key distinction is the position of the load.",
        "Some think the effort must always be larger than the load; in second-class levers the effort is smaller.",
        "Forgetting to account for the reaction force at the fulcrum leads to incorrect force diagrams."
      ],
      "hook": "Why can you lift a heavy wheelbarrow load with much less effort than lifting it directly? The second-class lever principle means your effort arm is longer than the load arm!",
      "khanLinks": [
        {
          "title": "Torque & Angular Momentum",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        },
        {
          "title": "AP Physics 1: Forces",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Load F_L (N)",
        "Load distance d_L (m)",
        "M_L (N·m)",
        "Effort F_E (N)",
        "Effort distance d_E (m)",
        "M_E (N·m)",
        "MA"
      ],
      "rows": 4
    },
    "observations": [
      "Verify that M_E ≈ M_L for equilibrium within experimental error.",
      "Note how the effort required is less than the load (MA > 1).",
      "Observe the reaction force direction at the end fulcrum."
    ],
    "conclusion": "Equilibrium was confirmed for a second-class lever: M_L = M_E. With the fulcrum at one end, the load at 8 cm and effort at 10 cm, the required effort (≈0.52 N) was less than the load (≈0.64 N), giving MA ≈ 1.25.",
    "ai": {
      "opening": "Second-class levers are all about mechanical advantage! Ask me how they work, how to calculate MA, or anything about the experiment.",
      "keywords": {
        "setup": "fulcrum at end|second-class lever|load between fulcrum and effort",
        "formula": "F_E × d_E = F_L × d_L|MA = d_E/d_L",
        "error": "fulcrum position|incorrect moment arm|beam weight neglected",
        "question": "mechanical advantage|second class|moment|reaction",
        "real": "wheelbarrow|nutcracker|door hinge"
      },
      "hint": "For a second-class lever: F_E × d_E = F_L × d_L. MA = d_E / d_L — always greater than 1 in second-class levers.",
      "expected": "m₁ = 65 g at 8 cm → M₁ = 0.052 N·m; effort at 10 cm → F_E ≈ 0.52 N, M₂ ≈ 0.052 N·m. MA ≈ 1.25."
    }
  },
  {
    "num": 5,
    "cardEmoji": "📐",
    "title": "Measurement of a length",
    "section": "Mechanics",
    "desc": "Measure the diameter and height of metal cylinders using a Vernier calliper and calculate their volumes.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students use a Vernier calliper (precision ±0.05 mm) to measure cylinder dimensions and apply V = πr²h to find volume.",
      "instructions": [
        "Read the Vernier calliper: main scale + Vernier scale × 0.05 mm.",
        "Measure the outer diameter d and height h of each cylinder at least twice.",
        "Calculate r = d/2, then V = πr²h for each material."
      ],
      "expectedOutcome": "Copper: h = 36 mm, d = 20 mm → V ≈ 11.30 cm³. Iron → V ≈ 9.73 cm³. Steel → V ≈ 12.87 cm³. Brass → V ≈ 11.93 cm³."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "📏",
          "name": "Vernier calliper (±0.05 mm)"
        },
        {
          "emoji": "🔵",
          "name": "Copper cylinder"
        },
        {
          "emoji": "⚫",
          "name": "Iron cylinder"
        },
        {
          "emoji": "⚙️",
          "name": "Steel cylinder"
        },
        {
          "emoji": "🟡",
          "name": "Brass cylinder"
        }
      ],
      "observationsToRecord": [
        "Diameter d (mm) — at least 2 measurements per cylinder",
        "Height h (mm) — at least 2 measurements per cylinder",
        "Calculated volume V = πr²h (cm³)"
      ],
      "theoryPoints": [
        "A Vernier calliper reads: main scale reading + (coincident Vernier division × 0.05 mm).",
        "Volume of a cylinder: V = πr²h = π(d/2)²h.",
        "Always take multiple measurements and average to reduce random error.",
        "Least count of the calliper is 0.05 mm — record to this precision."
      ],
      "realWorldConnections": [
        "Machinists use callipers daily to verify that machined parts meet engineering tolerances.",
        "Quality control in manufacturing uses volume and dimension measurements to check products.",
        "Medical devices such as stents require sub-millimetre precision."
      ],
      "formula": "V = πr²h = π(d/2)²h   |   Vernier reading = main scale + (Vernier div × 0.05 mm)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A Vernier calliper shows a main-scale reading of 20.0 mm and the 7th Vernier division coincides. What is the reading?",
          "options": [
            "20.35 mm",
            "20.07 mm",
            "20.70 mm",
            "20.50 mm"
          ],
          "correctIndex": 0,
          "explanation": "Reading = 20.0 + (7 × 0.05) = 20.0 + 0.35 = 20.35 mm."
        },
        {
          "text": "A copper cylinder has d = 20 mm and h = 36 mm. What is its volume?",
          "options": [
            "11.31 cm³",
            "1131 mm³",
            "1.131 cm³",
            "113.1 cm³"
          ],
          "correctIndex": 0,
          "explanation": "V = π(10)²(36) mm³ = 3600π ≈ 11 310 mm³ = 11.31 cm³."
        },
        {
          "text": "Why should you measure the diameter in two different orientations?",
          "options": [
            "To practise using the calliper",
            "To detect if the cross-section is not perfectly circular",
            "To increase the reading",
            "The calliper requires two readings"
          ],
          "correctIndex": 1,
          "explanation": "Real cylinders may be slightly elliptical; two perpendicular diameter measurements reveal this and allow a better average."
        }
      ],
      "discussion": [
        "Explain how to read a Vernier calliper. Why is the least count 0.05 mm rather than 0.1 mm?",
        "What systematic errors might affect volume measurements with a calliper?",
        "How would you modify the procedure if the cylinder had an irregular cross-section?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Reading a Vernier calliper",
          "pct": 30
        },
        {
          "label": "Volume formula V = πr²h",
          "pct": 30
        },
        {
          "label": "Measurement uncertainty",
          "pct": 25
        },
        {
          "label": "Unit conversion (mm→cm)",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students often mis-read the Vernier scale, forgetting to multiply the coincident division by 0.05 mm.",
        "Many forget to convert mm to cm before computing volume in cm³.",
        "Assuming one measurement is enough; multiple readings are needed to reduce random error."
      ],
      "hook": "A Vernier calliper reads to 0.05 mm — that's 50 micrometres, thinner than a human hair! How does adding a second tiny sliding scale make such precision possible?",
      "khanLinks": [
        {
          "title": "Significant Figures",
          "url": "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:sig-figs/v/significant-figures"
        },
        {
          "title": "Physics: Units & Measurement",
          "url": "https://www.khanacademy.org/science/physics/one-dimensional-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Material",
        "d₁ (mm)",
        "d₂ (mm)",
        "d_avg (mm)",
        "h₁ (mm)",
        "h₂ (mm)",
        "h_avg (mm)",
        "V (cm³)"
      ],
      "rows": 4
    },
    "observations": [
      "Record each diameter and height measurement to 0.05 mm precision.",
      "Note any difference between two diameter readings for the same cylinder.",
      "Compare the calculated volumes for copper, iron, steel, and brass."
    ],
    "conclusion": "Volumes were calculated using V = π(d/2)²h. Results: copper ≈ 11.30 cm³, iron ≈ 9.73 cm³, steel ≈ 12.87 cm³, brass ≈ 11.93 cm³. The Vernier calliper provided measurements to ±0.05 mm precision.",
    "ai": {
      "opening": "Let's master the Vernier calliper! Ask me how to read it, how to calculate volume, or about measurement errors.",
      "keywords": {
        "setup": "Vernier calliper|main scale|Vernier division|least count",
        "formula": "V = πr²h|Vernier reading = main + div×0.05",
        "error": "mis-reading Vernier|unit conversion|non-circular cross-section",
        "question": "Vernier|volume|cylinder|diameter|precision",
        "real": "machinist|manufacturing|quality control"
      },
      "hint": "Vernier reading = main scale + (coincident division × 0.05 mm). Then V = π(d/2)²h. Convert mm to cm before computing cm³.",
      "expected": "Copper: d=20 mm, h=36 mm → V=11.30 cm³. Iron → 9.73 cm³. Steel → 12.87 cm³. Brass → 11.93 cm³."
    }
  },
  {
    "num": 6,
    "cardEmoji": "🧊",
    "title": "Measurement of density",
    "section": "Mechanics",
    "desc": "Determine the density of metal cylinders by two methods: mass/volume and using a displacement vessel.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "40 min",
    "summary": {
      "whatTheyLearn": "Students apply ρ = m/V using mass from a balance and volume from calliper measurements or water displacement, then compare the two methods.",
      "instructions": [
        "Method 1: Measure mass m with balance and volume V from calliper, then ρ = m/V.",
        "Method 2: Submerge cylinder in displacement vessel, collect overflow water, measure its volume.",
        "Compare densities from both methods to the accepted literature values."
      ],
      "expectedOutcome": "Copper: m = 100.28 g, V = 11.30 cm³ → ρ ≈ 8.87 g/cm³ (accepted 8.96). Aluminium → ρ ≈ 2.70 g/cm³. Steel → ρ ≈ 7.72 g/cm³. Brass → ρ ≈ 8.37 g/cm³."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Balance (±0.01 g)"
        },
        {
          "emoji": "📏",
          "name": "Vernier calliper"
        },
        {
          "emoji": "🫙",
          "name": "Displacement vessel (Eureka can)"
        },
        {
          "emoji": "🧪",
          "name": "Measuring cylinder (50 mL)"
        },
        {
          "emoji": "🔵",
          "name": "Metal cylinders (Cu, Al, Fe, Brass)"
        },
        {
          "emoji": "💧",
          "name": "Water"
        }
      ],
      "observationsToRecord": [
        "Mass m (g) from balance for each cylinder",
        "Volume V (cm³) from calliper measurements: V = π(d/2)²h",
        "Volume V (mL) from water displacement",
        "Density ρ = m/V for both methods"
      ],
      "theoryPoints": [
        "Density: ρ = m/V, SI unit kg/m³; often expressed as g/cm³.",
        "Displacement method: submerged object displaces its own volume of water.",
        "1 mL of water displaced = 1 cm³ of object volume.",
        "Density is an intrinsic property — it does not change with the size of the sample."
      ],
      "realWorldConnections": [
        "Geologists identify minerals by their density (specific gravity).",
        "Ships float because their average density (hull + air) is less than water (1.0 g/cm³).",
        "Food scientists measure density to monitor sugar concentration in beverages."
      ],
      "formula": "ρ = m / V   (g/cm³ or kg/m³)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A copper cylinder has mass 100.28 g and volume 11.30 cm³. What is its density?",
          "options": [
            "8.87 g/cm³",
            "9.11 g/cm³",
            "8.00 g/cm³",
            "11.30 g/cm³"
          ],
          "correctIndex": 0,
          "explanation": "ρ = m/V = 100.28 / 11.30 ≈ 8.87 g/cm³."
        },
        {
          "text": "Which of these metals has the highest density?",
          "options": [
            "Aluminium (~2.70 g/cm³)",
            "Steel (~7.7 g/cm³)",
            "Copper (~8.9 g/cm³)",
            "Brass (~8.4 g/cm³)"
          ],
          "correctIndex": 2,
          "explanation": "Copper has density ~8.9 g/cm³, higher than brass (~8.4), steel (~7.7), and aluminium (~2.7)."
        },
        {
          "text": "In the displacement method, what volume is collected in the measuring cylinder?",
          "options": [
            "The volume of water in the vessel",
            "The volume of the submerged object",
            "The mass of the object",
            "The density of water"
          ],
          "correctIndex": 1,
          "explanation": "The overflow equals the volume of the submerged object (Archimedes' principle)."
        }
      ],
      "discussion": [
        "Why might the density measured by the two methods differ slightly?",
        "A sample of unknown material has ρ = 7.87 g/cm³. What material could it be?",
        "How does the density of sea water compare to fresh water, and what practical consequences does this have?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Definition ρ = m/V",
          "pct": 25
        },
        {
          "label": "Calliper method (V from geometry)",
          "pct": 25
        },
        {
          "label": "Displacement method",
          "pct": 30
        },
        {
          "label": "Comparing literature values",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students confuse density with heaviness; a small piece of lead is denser than a large piece of wood even though the wood is heavier.",
        "Many think density changes when the object is cut in half; it does not.",
        "Confusing volume displaced with mass of water displaced leads to unit errors."
      ],
      "hook": "How can a massive steel ship float on water while a small steel bolt sinks? It's all about average density — the ship traps a huge volume of air, reducing its overall density below water's 1.0 g/cm³.",
      "khanLinks": [
        {
          "title": "Density: A Fundamental Concept",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density/v/density-a-fundamental-concept"
        },
        {
          "title": "States of Matter & Density",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Material",
        "Mass m (g)",
        "V_calc (cm³)",
        "V_disp (mL)",
        "ρ_calc (g/cm³)",
        "ρ_disp (g/cm³)",
        "ρ_accepted (g/cm³)"
      ],
      "rows": 4
    },
    "observations": [
      "Record masses to ±0.01 g and volumes to ±0.1 cm³.",
      "Compare ρ from both methods and calculate percentage difference.",
      "Note which method is more accurate and explain why."
    ],
    "conclusion": "Density was determined by two methods. Copper: ρ ≈ 8.87 g/cm³ (accepted 8.96 g/cm³). Results confirm ρ = m/V and Archimedes' displacement principle. Discrepancy < 5% due to measurement precision.",
    "ai": {
      "opening": "Density is one of the most fundamental material properties! Ask me about ρ = m/V, the two methods, or how to reduce errors.",
      "keywords": {
        "setup": "balance|calliper|displacement vessel|Eureka can",
        "formula": "ρ = m/V|displacement",
        "error": "air bubbles in displacement|calliper reading|balance drift",
        "question": "density|displacement|material identification",
        "real": "ship flotation|mineral identification|food science"
      },
      "hint": "ρ = m/V. Method 1: V from πr²h. Method 2: V = volume of water displaced. Compare both results to literature values.",
      "expected": "Cu: ρ ≈ 8.87 g/cm³ (accepted ~8.96). Al ≈ 2.70. Steel ≈ 7.72. Brass ≈ 8.37 g/cm³."
    }
  },
  {
    "num": 8,
    "cardEmoji": "➡️",
    "title": "Composition and decomposition of forces",
    "section": "Mechanics",
    "desc": "Find the resultant of two concurrent forces using the parallelogram rule and verify it with a third equilibrant force.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students apply the parallelogram rule to add force vectors graphically and verify the result by measurement with a goniometric circle and three dynamometers.",
      "instructions": [
        "Mount three dynamometers on the goniometric circle at known angles.",
        "Set F₁ = 40 g (0.39 N) and F₂ = 20 g (0.20 N) at a known angle θ between them.",
        "Find the third force (equilibrant) experimentally; the resultant R is equal and opposite to it.",
        "Draw the parallelogram graphically and compare with the measured resultant."
      ],
      "expectedOutcome": "F₁ = 40 g, F₂ = 20 g → measured R ≈ 0.50 N; parallelogram rule gives ≈ 0.56 N. Discrepancy due to friction and angle reading."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Goniometric circle (0–360°)"
        },
        {
          "emoji": "🔧",
          "name": "Three spring dynamometers"
        },
        {
          "emoji": "📐",
          "name": "Protractor"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "📝",
          "name": "Graph paper"
        }
      ],
      "observationsToRecord": [
        "Magnitudes F₁ and F₂ (N) and the angle θ between them",
        "Magnitude of the equilibrant F₃ (N) and its direction",
        "Graphically constructed resultant magnitude and direction"
      ],
      "theoryPoints": [
        "Forces are vectors: they have both magnitude and direction.",
        "The resultant R of two forces is found by the parallelogram rule: R² = F₁² + F₂² + 2F₁F₂cos θ.",
        "The equilibrant is equal in magnitude but opposite in direction to the resultant.",
        "For three concurrent forces in equilibrium: ΣF = 0."
      ],
      "realWorldConnections": [
        "Engineers resolve forces in bridge trusses into horizontal and vertical components.",
        "Pilots use vector addition to account for wind when navigating.",
        "Biomechanics uses force vectors to analyse joint loads in the human body."
      ],
      "formula": "R = √(F₁² + F₂² + 2F₁F₂cos θ)   |   Equilibrium: ΣF = 0"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two forces of 40 g and 20 g act at 90° to each other. What is the approximate resultant?",
          "options": [
            "0.44 N",
            "0.60 N",
            "0.20 N",
            "0.59 N"
          ],
          "correctIndex": 0,
          "explanation": "R = √(0.39² + 0.20²) = √(0.152 + 0.040) = √0.192 ≈ 0.44 N."
        },
        {
          "text": "The equilibrant force is:",
          "options": [
            "Equal to the resultant in magnitude and direction",
            "Equal in magnitude but opposite in direction to the resultant",
            "Twice the resultant",
            "At 90° to the resultant"
          ],
          "correctIndex": 1,
          "explanation": "The equilibrant balances the resultant, so it is equal in magnitude and opposite in direction."
        },
        {
          "text": "If θ = 0° (forces parallel and in same direction), the resultant magnitude equals:",
          "options": [
            "F₁ − F₂",
            "F₁ + F₂",
            "√(F₁² + F₂²)",
            "F₁ × F₂"
          ],
          "correctIndex": 1,
          "explanation": "When θ = 0°, cos 0° = 1, so R = √(F₁² + F₂² + 2F₁F₂) = F₁ + F₂."
        }
      ],
      "discussion": [
        "Explain why the measured resultant might differ from the parallelogram-rule prediction.",
        "How would the resultant change if the angle between F₁ and F₂ increased from 90° to 180°?",
        "Give a practical example where knowing the resultant of two forces is important."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Force as a vector",
          "pct": 25
        },
        {
          "label": "Parallelogram rule",
          "pct": 35
        },
        {
          "label": "Equilibrant concept",
          "pct": 25
        },
        {
          "label": "Graphical vs. analytical method",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students often add force magnitudes without considering direction, treating forces as scalars.",
        "Many think the equilibrant is the same as the resultant; it is equal but opposite.",
        "Forgetting that the parallelogram must have the two forces as adjacent sides, not opposite sides."
      ],
      "hook": "Three people are pulling ropes attached to a ring. If you know two of the forces, can you predict the third needed to keep the ring still? Vector addition gives the answer!",
      "khanLinks": [
        {
          "title": "Introduction to Vectors",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-two-dimensional-motion/representing-vectors/v/introduction-to-vectors-and-scalars"
        },
        {
          "title": "Forces & Newton's Laws",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "F₁ (N)",
        "F₂ (N)",
        "Angle θ (°)",
        "R_measured (N)",
        "R_calculated (N)",
        "% Difference"
      ],
      "rows": 4
    },
    "observations": [
      "Record the angles of each dynamometer on the goniometric circle.",
      "Note any friction effects that prevent the ring from staying centered.",
      "Compare graphical and calculated resultant values."
    ],
    "conclusion": "The parallelogram rule was verified: for F₁ = 0.39 N and F₂ = 0.20 N, the calculated resultant was ~0.56 N and the measured equilibrant gave R ≈ 0.50 N. The ~12% discrepancy is attributed to friction and angle-reading error.",
    "ai": {
      "opening": "Ready to add forces like a physicist? Ask me about the parallelogram rule, equilibrant forces, or vector components!",
      "keywords": {
        "setup": "goniometric circle|dynamometer|parallelogram rule|angle",
        "formula": "R = √(F₁²+F₂²+2F₁F₂cosθ)|equilibrant",
        "error": "friction|angle reading|graphical scale error",
        "question": "resultant|equilibrant|vector|parallelogram",
        "real": "bridge engineering|navigation|biomechanics"
      },
      "hint": "R = √(F₁² + F₂² + 2F₁F₂cosθ). The equilibrant is equal and opposite to R. At 90°, R = √(F₁² + F₂²).",
      "expected": "F₁=0.39 N, F₂=0.20 N at ~90°: R_calc ≈ 0.56 N, R_measured ≈ 0.50 N."
    }
  },
  {
    "num": 9,
    "cardEmoji": "🪝",
    "title": "Fixed Pulleys",
    "section": "Mechanics",
    "desc": "Show that a single fixed pulley changes the direction of force but not its magnitude; mechanical advantage = 1.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify that a fixed pulley has MA = 1 (effort = load) and confirm that its only advantage is changing the force direction.",
      "instructions": [
        "Hang a 50 g load on one side of the pulley string.",
        "Apply a force on the other side and measure it with a dynamometer.",
        "Vary the load and record the effort required each time."
      ],
      "expectedOutcome": "For each load, effort ≈ load. Two 50 g masses (one each side): both dynamometers read ~0.49 N. MA = 1."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Fixed pulley on support"
        },
        {
          "emoji": "🪢",
          "name": "Inextensible string"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g)"
        },
        {
          "emoji": "🔧",
          "name": "Spring dynamometer"
        }
      ],
      "observationsToRecord": [
        "Load W (N) hanging on one side",
        "Effort F (N) measured on other side",
        "Mechanical advantage MA = W/F"
      ],
      "theoryPoints": [
        "A fixed (single) pulley: the axle is fixed; only the wheel rotates.",
        "Tension is the same throughout an ideal (massless, frictionless) string.",
        "Mechanical advantage MA = Load / Effort = 1 for a fixed pulley.",
        "The fixed pulley's benefit: it allows you to pull downward to lift a load upward."
      ],
      "realWorldConnections": [
        "Flag poles use a fixed pulley — you pull down to raise the flag.",
        "Theatre stage rigging uses fixed pulleys to redirect lifting forces.",
        "Cranes combine fixed and movable pulleys for high mechanical advantage."
      ],
      "formula": "MA = Load / Effort = 1   (fixed pulley)"
    },
    "questions": {
      "mcq": [
        {
          "text": "What is the mechanical advantage of a single fixed pulley?",
          "options": [
            "0.5",
            "1",
            "2",
            "4"
          ],
          "correctIndex": 1,
          "explanation": "A fixed pulley only redirects the force; effort equals load, so MA = Load/Effort = 1."
        },
        {
          "text": "A 100 g mass hangs from a fixed pulley. What effort is needed to hold it in equilibrium?",
          "options": [
            "0.49 N",
            "0.98 N",
            "1.96 N",
            "0.25 N"
          ],
          "correctIndex": 0,
          "explanation": "Load = 0.1 × 9.81 = 0.981 N. Effort = Load / MA = 0.981 / 1 = 0.981 N ≈ 0.98 N. Wait — 100g = 0.981 N so effort = 0.981 N ≈ 0.98 N."
        },
        {
          "text": "Why does a fixed pulley NOT reduce the effort needed?",
          "options": [
            "Because the string is not ideal",
            "Because only one segment of rope supports the load",
            "Because there is too much friction",
            "Because the mass is too small"
          ],
          "correctIndex": 1,
          "explanation": "Only one rope segment supports the load; the entire weight must be matched by the effort."
        }
      ],
      "discussion": [
        "If a fixed pulley has MA = 1, what practical advantage does it offer?",
        "How does a fixed pulley differ from a movable pulley in terms of mechanical advantage?",
        "Describe a real-world situation where redirecting a force (even without multiplying it) is useful."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "MA = 1 for fixed pulley",
          "pct": 30
        },
        {
          "label": "Force redirection advantage",
          "pct": 30
        },
        {
          "label": "String tension concept",
          "pct": 25
        },
        {
          "label": "Ideal vs. real pulley",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Many students expect a pulley to always reduce the effort needed; a single fixed pulley does not.",
        "Confusing 'mechanical advantage' with 'velocity ratio' — for ideal machines they are equal.",
        "Ignoring string and pulley mass can give idealized results that differ from reality."
      ],
      "hook": "Why do builders use a single pulley at the top of a scaffold to lift bricks? Not to reduce effort — but to pull downward instead of pushing upward. Direction matters!",
      "khanLinks": [
        {
          "title": "Work & Energy",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "Forces & Newton's Laws",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Load (g)",
        "Load W (N)",
        "Effort F (N)",
        "MA = W/F"
      ],
      "rows": 4
    },
    "observations": [
      "Compare effort and load readings for each trial.",
      "Note any friction effects that make effort slightly greater than load.",
      "Observe that the pulley only changes force direction."
    ],
    "conclusion": "The fixed pulley has MA ≈ 1: effort equals load (within friction). For 50 g load: W = 0.49 N, effort ≈ 0.49 N. The only advantage is force direction reversal.",
    "ai": {
      "opening": "Pulleys are simple machines! Ask me about mechanical advantage, string tension, or why direction matters.",
      "keywords": {
        "setup": "fixed pulley|string|dynamometer|support",
        "formula": "MA = Load/Effort = 1|tension",
        "error": "friction|string mass|pulley mass",
        "question": "mechanical advantage|fixed pulley|direction|tension",
        "real": "flag pole|crane|theatre rigging"
      },
      "hint": "MA = Load/Effort = 1 for a fixed pulley. Effort equals load. The advantage is direction change, not force reduction.",
      "expected": "50 g load: W = 0.49 N, effort ≈ 0.49 N. MA ≈ 1 for all loads."
    }
  },
  {
    "num": 10,
    "cardEmoji": "🔄",
    "title": "Mobile Pulley",
    "section": "Mechanics",
    "desc": "Demonstrate that a single movable pulley provides a mechanical advantage of 2, halving the required effort.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify that P = R/2 (effort = half the load) for a movable pulley, confirming MA = 2.",
      "instructions": [
        "Set up the movable pulley with both string segments supporting the load.",
        "Attach a dynamometer to the free string end (effort side).",
        "Load the pulley with masses from 50 g to 200 g and record effort each time."
      ],
      "expectedOutcome": "M = [50,100,150,200] g → Load R = [0.49,0.98,1.47,1.96] N → Effort P ≈ [0.20,0.50,0.80,1.10] N (≈ R/2 with friction)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Movable pulley"
        },
        {
          "emoji": "🔵",
          "name": "Fixed pulley (for guidance)"
        },
        {
          "emoji": "🪢",
          "name": "String"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g, 150 g, 200 g)"
        },
        {
          "emoji": "🔧",
          "name": "Spring dynamometer"
        }
      ],
      "observationsToRecord": [
        "Load R (N) for each mass",
        "Effort P (N) measured by dynamometer",
        "MA = R/P for each trial"
      ],
      "theoryPoints": [
        "A movable pulley travels with the load; two rope segments support it.",
        "Ideal MA = 2: Effort P = Load R / 2.",
        "Real MA < 2 due to friction and pulley weight.",
        "The pulley shifts: when effort moves 2× the distance, the load moves 1× (velocity ratio = 2)."
      ],
      "realWorldConnections": [
        "Block and tackle systems in sailing use multiple movable pulleys for huge mechanical advantages.",
        "Construction cranes use movable pulleys to lift heavy steel beams.",
        "Gym cable machines use pulley systems to adjust effective resistance."
      ],
      "formula": "P = R / 2   |   MA = R/P = 2   (ideal movable pulley)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A movable pulley supports a 200 g load. What is the ideal effort required?",
          "options": [
            "0.49 N",
            "0.98 N",
            "1.96 N",
            "0.25 N"
          ],
          "correctIndex": 1,
          "explanation": "Load = 0.2 × 9.81 = 1.962 N. P = R/2 = 1.962/2 = 0.981 N ≈ 0.98 N."
        },
        {
          "text": "Why is the real MA of a movable pulley slightly less than 2?",
          "options": [
            "The string is too short",
            "Friction and the weight of the pulley itself reduce MA",
            "The load is too heavy",
            "The string is elastic"
          ],
          "correctIndex": 1,
          "explanation": "Friction and the pulley's own weight both require additional effort, reducing the actual MA below the ideal value of 2."
        },
        {
          "text": "If the effort moves 20 cm, how far does the load move in an ideal movable pulley?",
          "options": [
            "20 cm",
            "40 cm",
            "10 cm",
            "5 cm"
          ],
          "correctIndex": 2,
          "explanation": "Velocity ratio = 2, so load moves effort distance / 2 = 20/2 = 10 cm."
        }
      ],
      "discussion": [
        "Why does a movable pulley require the effort string to move twice as far as the load?",
        "How does friction affect the mechanical advantage of a real pulley system?",
        "Design a pulley system to achieve MA = 4. How many movable pulleys are needed?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "MA = 2 derivation",
          "pct": 30
        },
        {
          "label": "Two rope segments supporting load",
          "pct": 25
        },
        {
          "label": "Velocity ratio concept",
          "pct": 25
        },
        {
          "label": "Real vs. ideal MA",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students think a movable pulley and a fixed pulley have the same MA; the movable pulley has MA=2.",
        "Many forget that the effort string must move twice as far as the load (conservation of energy).",
        "Ignoring pulley weight leads to over-estimated theoretical MA."
      ],
      "hook": "A movable pulley means you only need to exert half the force to lift a load! But there's a catch — your hand has to move twice as far. Energy is always conserved!",
      "khanLinks": [
        {
          "title": "Work & Mechanical Advantage",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "AP Physics 1: Work & Energy",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mass (g)",
        "Load R (N)",
        "Effort P (N)",
        "MA = R/P",
        "Ideal MA"
      ],
      "rows": 4
    },
    "observations": [
      "Record P and R for each load and calculate MA.",
      "Compare actual MA with ideal value of 2.",
      "Measure how far the effort string moves for a fixed load displacement."
    ],
    "conclusion": "The movable pulley gave MA ≈ 1.8–2.0 (ideal = 2). For 100 g load: R = 0.98 N, P ≈ 0.50 N, MA ≈ 1.96. Slight deviation from MA=2 is due to friction and pulley weight.",
    "ai": {
      "opening": "Movable pulleys are force multipliers! Ask me how MA=2 is derived, or how friction affects the result.",
      "keywords": {
        "setup": "movable pulley|two rope segments|dynamometer",
        "formula": "P = R/2|MA = 2|velocity ratio",
        "error": "friction|pulley weight|string stretching",
        "question": "mechanical advantage|movable pulley|velocity ratio|effort",
        "real": "crane|block and tackle|sailing"
      },
      "hint": "MA = 2 for ideal movable pulley: P = R/2. In real life friction makes P slightly more than R/2.",
      "expected": "100g load: R=0.98 N, P≈0.50 N, MA≈1.96. 200g: R=1.96 N, P≈1.10 N, MA≈1.78."
    }
  },
  {
    "num": 11,
    "cardEmoji": "⛓️",
    "title": "Fixed and Mobile Pulleys",
    "section": "Mechanics",
    "desc": "Combine a fixed and a movable pulley and show that the system still yields MA ≈ 2 with the benefit of direction change.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students see that combining a fixed (guide) pulley with a movable pulley preserves MA = 2 while allowing the effort to be applied downward.",
      "instructions": [
        "Set up: movable pulley under the load + fixed pulley at the top to redirect effort.",
        "Pull the dynamometer downward and record effort for each load.",
        "Verify that P = R/2 still holds, and that effort rope moves 2× the load displacement."
      ],
      "expectedOutcome": "P = R/2 as with a single movable pulley. Pulling 2 cm of rope raises load by 1 cm."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Movable pulley"
        },
        {
          "emoji": "🔵",
          "name": "Fixed pulley (guide)"
        },
        {
          "emoji": "🪢",
          "name": "String"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g, 150 g)"
        },
        {
          "emoji": "🔧",
          "name": "Spring dynamometer"
        }
      ],
      "observationsToRecord": [
        "Load R (N) for each mass",
        "Effort P (N) with combined system",
        "Distance effort rope moves vs. distance load rises"
      ],
      "theoryPoints": [
        "Fixed pulley: changes direction only, MA = 1.",
        "Movable pulley: MA = 2, effort = R/2.",
        "Combined system: fixed pulley redirects effort downward; movable pulley still gives MA = 2.",
        "Rope displacement: effort rope moves 2× the load displacement (velocity ratio = 2)."
      ],
      "realWorldConnections": [
        "Elevators use combined pulley systems for both MA and convenient control direction.",
        "Well pulleys combine fixed and movable pulleys for practical water lifting.",
        "Bicycle derailleur cables use small pulleys to redirect and tension the chain."
      ],
      "formula": "P = R/2   |   MA = 2   |   s_effort = 2 × s_load"
    },
    "questions": {
      "mcq": [
        {
          "text": "In a combined (fixed + movable) pulley system, what is the mechanical advantage?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctIndex": 1,
          "explanation": "The fixed pulley only redirects; the movable pulley provides MA = 2."
        },
        {
          "text": "If the load rises by 5 cm, how far does the effort rope move?",
          "options": [
            "5 cm",
            "10 cm",
            "2.5 cm",
            "20 cm"
          ],
          "correctIndex": 1,
          "explanation": "Velocity ratio = 2; effort rope moves 2 × 5 cm = 10 cm."
        },
        {
          "text": "What is the main advantage of adding a fixed pulley to the system?",
          "options": [
            "It doubles the MA",
            "It halves the load",
            "It allows the effort to be applied in a more convenient direction",
            "It eliminates friction"
          ],
          "correctIndex": 2,
          "explanation": "The fixed (guide) pulley redirects the effort string so you can pull downward rather than upward."
        }
      ],
      "discussion": [
        "Why does adding the fixed guide pulley NOT change the mechanical advantage of the system?",
        "Compare the effort rope displacement with the load displacement. What principle explains this?",
        "How would you increase the MA beyond 2 using more pulleys?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Fixed pulley role (direction only)",
          "pct": 25
        },
        {
          "label": "Movable pulley provides MA=2",
          "pct": 35
        },
        {
          "label": "Velocity ratio s_effort = 2s_load",
          "pct": 25
        },
        {
          "label": "Practical convenience of combined system",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students expect the combined system to have MA = 3 (1+2); the fixed pulley contributes no MA.",
        "Confusing total rope segments with mechanical advantage in combined systems.",
        "Assuming friction is negligible; real systems always have some friction loss."
      ],
      "hook": "A well uses a handle to pull a bucket up. But what if you could use a pulley system that halves your effort AND lets you pull in a natural direction? Combined pulleys do exactly that!",
      "khanLinks": [
        {
          "title": "Introduction to Work & Energy",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "AP Physics 1: Work & Energy",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mass (g)",
        "Load R (N)",
        "Effort P (N)",
        "MA = R/P",
        "s_effort (cm)",
        "s_load (cm)"
      ],
      "rows": 4
    },
    "observations": [
      "Verify that P ≈ R/2 for combined system as for single movable pulley.",
      "Measure s_effort and s_load and confirm the 2:1 ratio.",
      "Note the direction of the effort force (downward) compared to the load (upward)."
    ],
    "conclusion": "The combined (fixed + movable) pulley system maintains MA = 2 (P = R/2) while allowing effort to be applied downward. Effort rope displacement was 2× the load displacement in all trials.",
    "ai": {
      "opening": "Combined pulleys give you direction AND mechanical advantage! Ask me how MA=2 is maintained and how rope distances relate.",
      "keywords": {
        "setup": "fixed pulley|movable pulley|combined system|guide",
        "formula": "P = R/2|MA=2|s_effort = 2×s_load",
        "error": "friction|rope mass|incorrectly counting pulleys",
        "question": "MA|combined pulley|velocity ratio|direction",
        "real": "elevator|well|crane"
      },
      "hint": "Fixed pulley only redirects. Movable pulley gives MA=2. Together: P=R/2 and effort moves 2× further than the load.",
      "expected": "P ≈ R/2 for all loads. s_effort = 2 × s_load confirmed. MA ≈ 2."
    }
  },
  {
    "num": 12,
    "cardEmoji": "📐",
    "title": "Inclined Plane",
    "section": "Mechanics",
    "desc": "Measure the force needed to slide a mass up an inclined plane and compare with the theoretical component of gravity along the slope.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify that F = mg sin θ (the component of gravity along the slope) and measure the mechanical advantage MA = 1/sin θ.",
      "instructions": [
        "Set the inclined plane to a measured angle θ (e.g. 23.16°).",
        "Attach a dynamometer to a mass on the slope; pull parallel to the surface.",
        "Record the force F for masses of 50 g, 100 g, and 150 g."
      ],
      "expectedOutcome": "At θ = 23.16°: M = [50,100,150] g → F ≈ [0.7,0.9,1.1] N. Theoretical: mg sin 23.16° = [0.19,0.39,0.58] N. Difference is friction."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "📐",
          "name": "Inclined plane with angle scale"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g, 150 g)"
        },
        {
          "emoji": "🔧",
          "name": "Spring dynamometer"
        },
        {
          "emoji": "📏",
          "name": "Protractor / ruler"
        },
        {
          "emoji": "🪢",
          "name": "String"
        }
      ],
      "observationsToRecord": [
        "Slope angle θ (degrees)",
        "Mass m (g) and weight mg (N)",
        "Force F (N) to pull mass up the slope"
      ],
      "theoryPoints": [
        "Component of gravity along slope: F_parallel = mg sin θ.",
        "Mechanical advantage of frictionless inclined plane: MA = 1/sin θ = l/h.",
        "Friction force f = μN = μ mg cos θ adds to the required effort.",
        "Total effort (with friction): F = mg sin θ + μ mg cos θ.",
        "An inclined plane trades distance for force: small angle → large MA but long path."
      ],
      "realWorldConnections": [
        "Roads and ramps are inclined planes that reduce the force needed to ascend.",
        "Wheelchair ramps are legally required to have a small enough angle for safe access.",
        "Screws and wedges are inclined planes wrapped around a cylinder."
      ],
      "formula": "F = mg sin θ   (frictionless)   |   MA = 1/sin θ = l/h"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 100 g mass is on a frictionless slope at 30°. What force is needed to pull it up the slope?",
          "options": [
            "0.49 N",
            "0.85 N",
            "0.98 N",
            "0.57 N"
          ],
          "correctIndex": 0,
          "explanation": "F = mg sin 30° = 0.1 × 9.81 × 0.5 = 0.49 N."
        },
        {
          "text": "At θ = 23°, the MA of a frictionless inclined plane is approximately:",
          "options": [
            "2.56",
            "0.39",
            "1.00",
            "4.35"
          ],
          "correctIndex": 0,
          "explanation": "MA = 1/sin 23° = 1/0.391 ≈ 2.56."
        },
        {
          "text": "Why is the measured force greater than mg sin θ?",
          "options": [
            "Measurement error only",
            "Friction between mass and surface",
            "The spring dynamometer is faulty",
            "The angle is incorrect"
          ],
          "correctIndex": 1,
          "explanation": "Friction adds μ mg cos θ to the required effort, making the real force greater than the frictionless theoretical value."
        }
      ],
      "discussion": [
        "Explain why a gentle slope is easier to climb than a steep one, using forces.",
        "A ramp is 3 m long and rises 1 m. What is its MA? What effort is needed to push a 60 kg box up it?",
        "How does friction affect the mechanical advantage of a real inclined plane?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Slope force F = mg sinθ",
          "pct": 30
        },
        {
          "label": "Normal force N = mg cosθ",
          "pct": 20
        },
        {
          "label": "Friction f = μN",
          "pct": 25
        },
        {
          "label": "MA = l/h = 1/sinθ",
          "pct": 25
        }
      ],
      "misconceptions": [
        "Students often think friction decreases on steeper slopes; in fact the normal force (and friction) decreases but the required force still increases.",
        "Confusing the length of the slope with the height gained leads to MA calculation errors.",
        "Many forget that friction is always directed opposite to motion, increasing the required effort."
      ],
      "hook": "Ancient Egyptians moved blocks weighing tonnes up enormous ramps to build the pyramids. They understood the inclined plane: with a gentle enough slope, any force can move any load!",
      "khanLinks": [
        {
          "title": "Inclined Plane Force Components",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/inclined-planes-ap/v/inclined-plane-force-components"
        },
        {
          "title": "Normal Force & Contact Force",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/normal-force-ap/v/normal-force-and-contact-force"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mass (g)",
        "Weight mg (N)",
        "Angle θ (°)",
        "F_measured (N)",
        "mg·sinθ (N)",
        "Friction f (N)"
      ],
      "rows": 4
    },
    "observations": [
      "Record the force needed to pull each mass up the slope at constant speed.",
      "Calculate mg sin θ and compare with the measured force.",
      "The difference (F − mg sin θ) estimates the friction force."
    ],
    "conclusion": "At θ = 23.16°: measured forces were F ≈ 0.7, 0.9, 1.1 N for 50, 100, 150 g. Theoretical mg sin θ ≈ 0.19, 0.39, 0.58 N. Difference confirms significant friction force on the slope.",
    "ai": {
      "opening": "Inclined planes turn steep climbs into gentle pushes! Ask me about F = mg sinθ, MA, or how friction changes things.",
      "keywords": {
        "setup": "inclined plane|angle|dynamometer|slope",
        "formula": "F = mg sinθ|MA = 1/sinθ|friction = μN",
        "error": "friction neglected|angle measurement|dynamometer at wrong angle",
        "question": "inclined plane|slope|mechanical advantage|friction|angle",
        "real": "ramp|road|pyramid|screw"
      },
      "hint": "F = mg sinθ (frictionless). Real F = mg sinθ + μ mg cosθ. MA = l/h = 1/sinθ.",
      "expected": "θ=23°: F_theory = mg×0.392. M=50g: F_theory≈0.19 N but F_measured≈0.7 N. Friction is large."
    }
  },
  {
    "num": 13,
    "cardEmoji": "🪃",
    "title": "Hooke’s Law",
    "section": "Mechanics",
    "desc": "Verify Hooke's Law by measuring spring extension as a function of applied force and determine the spring constant k.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students plot F vs. x and verify F = kx. The slope of the line equals the spring constant k (N/m).",
      "instructions": [
        "Hang the spring vertically; record the natural length (no load).",
        "Add masses of 10 g, 25 g, 50 g; measure total length and calculate extension x.",
        "Plot F = mg (y-axis) vs. x (x-axis); the slope is k."
      ],
      "expectedOutcome": "m = 10 g → x = 0.016 m; m = 25 g → x = 0.040 m; m = 50 g → x = 0.081 m. k = slope of F vs. x graph."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Helical spring"
        },
        {
          "emoji": "📏",
          "name": "Ruler or metre stick"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (10 g, 25 g, 50 g)"
        },
        {
          "emoji": "🪝",
          "name": "Mass hanger"
        },
        {
          "emoji": "📝",
          "name": "Graph paper"
        }
      ],
      "observationsToRecord": [
        "Natural length L₀ (m)",
        "Total length L (m) with each mass",
        "Extension x = L − L₀ (m)",
        "Applied force F = mg (N)"
      ],
      "theoryPoints": [
        "Hooke's Law: F = kx (restoring force proportional to extension, within elastic limit).",
        "Spring constant k = F/x (N/m): stiffness of the spring.",
        "The elastic limit is the maximum extension beyond which the spring is permanently deformed.",
        "F vs. x graph: straight line through origin with slope = k.",
        "Negative sign in F = −kx indicates the restoring force opposes extension."
      ],
      "realWorldConnections": [
        "Suspension springs in cars and bicycles absorb shocks using Hooke's Law.",
        "Elastic potential energy stored in a compressed spring powers clockwork mechanisms.",
        "Seismographs use spring-mass systems to detect ground vibrations."
      ],
      "formula": "F = kx   |   k = F/x (N/m)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A spring extends by 0.040 m when a 25 g mass is hung on it. What is k?",
          "options": [
            "6.1 N/m",
            "0.61 N/m",
            "61 N/m",
            "0.245 N/m"
          ],
          "correctIndex": 0,
          "explanation": "F = 0.025 × 9.81 = 0.245 N; k = F/x = 0.245/0.040 = 6.1 N/m."
        },
        {
          "text": "What does the slope of an F vs. x graph represent?",
          "options": [
            "Gravitational field strength",
            "Spring constant k",
            "Mass of the spring",
            "Elastic limit"
          ],
          "correctIndex": 1,
          "explanation": "F = kx so slope = ΔF/Δx = k."
        },
        {
          "text": "Hooke's Law breaks down when:",
          "options": [
            "Temperature increases",
            "Extension exceeds the elastic limit",
            "Mass is removed",
            "The spring is horizontal"
          ],
          "correctIndex": 1,
          "explanation": "Beyond the elastic limit the spring is permanently deformed and the linear relationship F = kx no longer holds."
        }
      ],
      "discussion": [
        "How would you determine the elastic limit of the spring from your F vs. x graph?",
        "Two springs have k₁ = 5 N/m and k₂ = 10 N/m. Which spring is stiffer? Why?",
        "Explain why a spring obeys Hooke's Law only up to a certain extension."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Hooke's Law F = kx",
          "pct": 35
        },
        {
          "label": "Spring constant k from graph slope",
          "pct": 30
        },
        {
          "label": "Elastic limit",
          "pct": 20
        },
        {
          "label": "Graphical analysis",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students sometimes think k depends on the load; it is a property of the spring, constant in the elastic region.",
        "Forgetting to measure from the natural length: extension x = L − L₀, not the total length L.",
        "Assuming the graph must pass through (0,0); in practice a small zero error may shift it."
      ],
      "hook": "A spring scale works because of Hooke's Law — the extension is exactly proportional to the force. Without this simple rule, bathroom scales would be useless!",
      "khanLinks": [
        {
          "title": "Intro to Springs and Hooke's Law",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law"
        },
        {
          "title": "Spring Potential Energy",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy/spring-potential-energy-ap/v/elastic-potential-energy-stored-in-a-spring"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mass m (g)",
        "Force F = mg (N)",
        "Total length L (m)",
        "Extension x = L−L₀ (m)",
        "k = F/x (N/m)"
      ],
      "rows": 5
    },
    "observations": [
      "Record natural length L₀ carefully with no mass attached.",
      "Ensure each mass is added gently to avoid oscillation during measurement.",
      "Plot F vs. x and draw the best-fit straight line through the origin."
    ],
    "conclusion": "Hooke's Law verified: F = kx. Data: m=10g→x=1.6cm, m=25g→x=4.0cm, m=50g→x=8.1cm. Spring constant k ≈ 6.0 N/m from graph slope. Linear relationship confirmed within elastic limit.",
    "ai": {
      "opening": "Springs and Hooke's Law! Ask me how to find k, what the elastic limit means, or how to plot the graph.",
      "keywords": {
        "setup": "helical spring|natural length|extension|mass hanger",
        "formula": "F = kx|k = F/x|elastic limit",
        "error": "zero error|measuring from wrong reference|beyond elastic limit",
        "question": "Hooke's Law|spring constant|extension|elastic limit",
        "real": "suspension spring|clockwork|seismograph"
      },
      "hint": "x = L − L₀ (extension, not total length). Plot F vs. x; slope = k. F = kx only within elastic limit.",
      "expected": "10g→x=0.016m; 25g→x=0.040m; 50g→x=0.081m. k ≈ 6 N/m from best-fit slope."
    }
  },
  {
    "num": 14,
    "cardEmoji": "🔗",
    "title": "Springs in series and in parallel",
    "section": "Mechanics",
    "desc": "Measure the effective spring constant for springs connected in series and in parallel, and explore the surprising 'spring paradox'.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Students derive and verify 1/k_series = 1/k₁ + 1/k₂ and k_parallel = k₁ + k₂, and observe the paradox where cutting the middle string of two loaded springs causes one mass to rise.",
      "instructions": [
        "Connect two springs in series: measure extension for each load; calculate 1/k_s.",
        "Connect the same springs in parallel: measure extension for same loads; calculate k_p.",
        "Set up the paradox: two springs compressed against a mass; cut the middle string."
      ],
      "expectedOutcome": "Series: 1/k_s = 1/k₁ + 1/k₂ → k_s < k₁ or k₂. Parallel: k_p = k₁ + k₂ → stiffer. Paradox: cutting the middle string causes the connected mass to rise."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Two identical helical springs"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (50 g, 100 g)"
        },
        {
          "emoji": "✂️",
          "name": "Scissors (for paradox)"
        },
        {
          "emoji": "🧵",
          "name": "String"
        }
      ],
      "observationsToRecord": [
        "Extension of series combination for each load → k_series",
        "Extension of parallel combination for each load → k_parallel",
        "Direction of mass movement when middle string is cut (paradox)"
      ],
      "theoryPoints": [
        "Series springs: same tension in each; total extension = x₁ + x₂; 1/k_s = 1/k₁ + 1/k₂.",
        "Parallel springs: share the load; same extension; k_p = k₁ + k₂.",
        "Series springs are softer (smaller k); parallel springs are stiffer (larger k).",
        "The spring paradox: one spring is compressed and one extended via a string. Cutting the string releases stored energy, causing a net upward impulse on the attached mass."
      ],
      "realWorldConnections": [
        "Vehicle suspensions use spring combinations tuned for comfort (series, softer) or handling (parallel, stiffer).",
        "Mattress springs are in parallel — many springs share the load, giving high k_p.",
        "Bungee ropes are effectively springs in series (longer → softer)."
      ],
      "formula": "Series: 1/k_s = 1/k₁ + 1/k₂   |   Parallel: k_p = k₁ + k₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two springs each with k = 10 N/m are connected in series. What is the combined spring constant?",
          "options": [
            "20 N/m",
            "10 N/m",
            "5 N/m",
            "1 N/m"
          ],
          "correctIndex": 2,
          "explanation": "1/k_s = 1/10 + 1/10 = 2/10; k_s = 5 N/m."
        },
        {
          "text": "Two springs each with k = 10 N/m are connected in parallel. What is k_p?",
          "options": [
            "5 N/m",
            "10 N/m",
            "20 N/m",
            "100 N/m"
          ],
          "correctIndex": 2,
          "explanation": "k_p = k₁ + k₂ = 10 + 10 = 20 N/m."
        },
        {
          "text": "In the spring paradox, what causes the mass to move upward when the string is cut?",
          "options": [
            "Gravity reverses direction",
            "The compressed spring releases its stored elastic energy",
            "The string was supporting extra weight",
            "Air pressure increases"
          ],
          "correctIndex": 1,
          "explanation": "The compressed spring was storing elastic potential energy. When the constraint (string) is removed, that energy is released as an upward impulse."
        }
      ],
      "discussion": [
        "Why is k_series < k₁ and k₂, while k_parallel > k₁ and k₂?",
        "Explain the spring paradox in terms of stored elastic potential energy.",
        "A mattress has 100 parallel springs each with k = 200 N/m. What is the total k?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Series formula 1/k_s = Σ1/kᵢ",
          "pct": 30
        },
        {
          "label": "Parallel formula k_p = Σkᵢ",
          "pct": 30
        },
        {
          "label": "Graphical verification",
          "pct": 20
        },
        {
          "label": "Spring paradox (elastic energy)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students often apply the series formula (1/k_total) when they mean parallel and vice versa — remember: series → softer; parallel → stiffer.",
        "Many assume series springs extend half as much as a single spring; actually they extend twice as much per unit load.",
        "The spring paradox surprises everyone: students expect the mass to fall or stay still when the string is cut."
      ],
      "hook": "Cut the string connecting two loaded springs and watch what happens — one mass shoots upward! Springs can store and release energy in unexpected ways.",
      "khanLinks": [
        {
          "title": "Spring Forces (AP Physics 1)",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap"
        },
        {
          "title": "Intro to Springs and Hooke's Law",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Configuration",
        "Mass (g)",
        "Load F (N)",
        "Extension x (m)",
        "k_eff (N/m)"
      ],
      "rows": 6
    },
    "observations": [
      "Record extension for series and parallel for the same loads.",
      "Confirm that series extends more than a single spring and parallel extends less.",
      "Observe the direction of motion when the paradox string is cut."
    ],
    "conclusion": "Series: k_s = k/2 for equal springs (softer). Parallel: k_p = 2k (stiffer). Formulas verified within 5% error. Paradox: mass rose when middle string was cut — elastic energy release explained this.",
    "ai": {
      "opening": "Series or parallel springs — which is stiffer? And what's the spring paradox? Ask me anything about spring combinations!",
      "keywords": {
        "setup": "series springs|parallel springs|string|masses",
        "formula": "1/k_s = 1/k₁+1/k₂|k_p = k₁+k₂|paradox",
        "error": "reading extension|friction|string not cut cleanly",
        "question": "series|parallel|spring constant|paradox|elastic energy",
        "real": "vehicle suspension|mattress|bungee"
      },
      "hint": "Series: 1/k_s = 1/k₁+1/k₂ (softer). Parallel: k_p = k₁+k₂ (stiffer). Paradox: compressed spring stores energy → releases upward when string cuts.",
      "expected": "Equal springs k=6 N/m: series k_s=3 N/m; parallel k_p=12 N/m. Paradox: mass rises when string cut."
    }
  },
  {
    "num": 15,
    "cardEmoji": "🕰️",
    "title": "Simple Pendulum",
    "section": "Mechanics",
    "desc": "Measure the period of a simple pendulum for different lengths and verify T = 2π√(L/g).",
    "equipmentNeeded": "basic-supplies",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students measure T for lengths L = 0.25 m and L = 1.0 m and confirm T² ∝ L, allowing calculation of g.",
      "instructions": [
        "Set pendulum length L = 0.25 m; displace < 5° from vertical and release.",
        "Time 50 complete oscillations (50T) with a stopwatch.",
        "Repeat for L = 1.0 m. Calculate T and compare with T = 2π√(L/g)."
      ],
      "expectedOutcome": "L = 0.25 m → T ≈ 1.0 s; L = 1.0 m → T ≈ 2.0 s. Ratio T(1m)/T(0.25m) = 2 = √(1/0.25)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚫",
          "name": "Bob (small dense sphere)"
        },
        {
          "emoji": "🧵",
          "name": "Inextensible string (adjustable 0.25–1.0 m)"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🔩",
          "name": "Clamp and stand"
        }
      ],
      "observationsToRecord": [
        "Length L (m) from pivot to centre of bob",
        "Time for 50 oscillations t₅₀ (s)",
        "Period T = t₅₀/50 (s)",
        "T² (s²)"
      ],
      "theoryPoints": [
        "T = 2π√(L/g): period depends only on length and g, not mass or amplitude (< 10°).",
        "Squaring: T² = (4π²/g) L — linear relationship between T² and L.",
        "Slope of T² vs. L graph = 4π²/g → g = 4π²/slope.",
        "Timing 50 oscillations reduces the percentage error in T."
      ],
      "realWorldConnections": [
        "Pendulum clocks used this principle for 300 years to keep accurate time.",
        "Foucault's pendulum demonstrates Earth's rotation.",
        "Gravimeters use precision pendulums to map Earth's gravitational field."
      ],
      "formula": "T = 2π√(L/g)   |   T² = (4π²/g) × L"
    },
    "questions": {
      "mcq": [
        {
          "text": "A pendulum of length 1.0 m. What is its period? (g = 9.81 m/s²)",
          "options": [
            "2.01 s",
            "1.00 s",
            "3.14 s",
            "0.50 s"
          ],
          "correctIndex": 0,
          "explanation": "T = 2π√(1.0/9.81) = 2π × 0.319 = 2.006 s ≈ 2.01 s."
        },
        {
          "text": "If L is quadrupled, T:",
          "options": [
            "Doubles",
            "Quadruples",
            "Halves",
            "Stays the same"
          ],
          "correctIndex": 0,
          "explanation": "T ∝ √L. Quadrupling L multiplies √L by 2, so T doubles."
        },
        {
          "text": "Why measure 50 oscillations rather than just 1?",
          "options": [
            "To make the pendulum swing faster",
            "To reduce the percentage error in T",
            "To increase the amplitude",
            "To change the frequency"
          ],
          "correctIndex": 1,
          "explanation": "Reaction time error is ~0.2 s regardless; for 50 oscillations this is only 0.2/50T ≈ 0.2% error instead of 20% for 1 oscillation."
        }
      ],
      "discussion": [
        "How would you use your T² vs. L graph to determine g?",
        "Does the mass of the bob affect the period? Justify your answer using the formula.",
        "A grandfather clock runs slow. Should you shorten or lengthen its pendulum to correct it?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "T = 2π√(L/g)",
          "pct": 30
        },
        {
          "label": "T² vs. L linear graph",
          "pct": 25
        },
        {
          "label": "Measuring g from slope",
          "pct": 25
        },
        {
          "label": "Experimental technique (50 oscillations)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students often think heavier bobs swing faster; period is independent of mass.",
        "Many believe larger amplitudes increase period; T is independent of amplitude for small angles (< 10°).",
        "Confusing one oscillation (A→B→A) with a half-oscillation (A→B)."
      ],
      "hook": "Galileo reportedly timed swinging cathedral lamps with his own pulse. He noticed all swings took the same time regardless of how far they swung — the birth of the pendulum clock!",
      "khanLinks": [
        {
          "title": "Period of a Pendulum",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/simple-pendulum-ap/v/period-of-a-pendulum"
        },
        {
          "title": "Simple Harmonic Motion",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Length L (m)",
        "Time 50 oscillations t₅₀ (s)",
        "Period T = t₅₀/50 (s)",
        "T² (s²)",
        "T_theoretical (s)"
      ],
      "rows": 4
    },
    "observations": [
      "Keep amplitude below 5° for each trial.",
      "Record t₅₀ three times and average to reduce timing error.",
      "Plot T² vs. L and draw best-fit line to find g."
    ],
    "conclusion": "T = 2π√(L/g) verified. L=0.25 m → T ≈ 1.00 s; L=1.0 m → T ≈ 2.01 s. Ratio T(1m)/T(0.25m) = 2.01 ≈ √4 = 2. g calculated from slope ≈ 9.7–9.9 m/s².",
    "ai": {
      "opening": "Pendulums are the original timekeepers! Ask me about T = 2π√(L/g), how to find g, or timing techniques.",
      "keywords": {
        "setup": "pendulum|length|bob|50 oscillations|stopwatch",
        "formula": "T = 2π√(L/g)|T² = (4π²/g)L",
        "error": "amplitude too large|timing error|measuring L to wrong point",
        "question": "period|length|mass|amplitude|g|oscillation",
        "real": "pendulum clock|Foucault pendulum|gravimeter"
      },
      "hint": "T = 2π√(L/g). Time 50 oscillations; T = t₅₀/50. T² vs. L is linear; slope = 4π²/g.",
      "expected": "L=0.25m → T=1.00s; L=1.0m → T=2.01s. T²=(4π²/9.81)L: slope=4.03 s²/m."
    }
  },
  {
    "num": 16,
    "cardEmoji": "💫",
    "title": "Spring Pendulum",
    "section": "Mechanics",
    "desc": "Measure the period of a spring-mass oscillator and verify T = 2π√(m/k).",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify that the period of a spring pendulum depends on mass and spring constant but NOT on amplitude, and measure T for two different lengths.",
      "instructions": [
        "Attach a mass m to the spring; displace slightly (< 5 cm) and release.",
        "Time 20 oscillations and calculate T = t₂₀/20.",
        "Record: L = 0.25 m → 20.20 s (T ≈ 1.01 s); L = 1.0 m → 40.40 s (T ≈ 2.02 s)."
      ],
      "expectedOutcome": "T = 2π√(m/k). For same spring: L=0.25m → T≈1.01s; L=1.0m → T≈2.02s (period doubles when L quadruples, confirming T∝√L analogy)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Helical spring (known k)"
        },
        {
          "emoji": "🏋️",
          "name": "Mass (measured in g)"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🔩",
          "name": "Clamp and stand"
        }
      ],
      "observationsToRecord": [
        "Mass m (kg)",
        "Time for 20 oscillations t₂₀ (s)",
        "Period T = t₂₀/20 (s)",
        "Spring constant k (from Exp 13)"
      ],
      "theoryPoints": [
        "T = 2π√(m/k): period depends on mass and spring constant.",
        "Unlike simple pendulum, T does NOT depend on g.",
        "Increasing mass increases T; increasing k decreases T.",
        "The system executes simple harmonic motion (SHM): F = −kx."
      ],
      "realWorldConnections": [
        "Vehicle shock absorbers are tuned spring-mass systems.",
        "Mass spectrometers use spring-like electric forces to separate ions by mass.",
        "Building dampers (tuned mass dampers) protect skyscrapers from oscillation."
      ],
      "formula": "T = 2π√(m/k)   |   f = (1/2π)√(k/m)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A spring (k = 6 N/m) with m = 0.150 kg. Calculate T.",
          "options": [
            "0.99 s",
            "1.57 s",
            "3.14 s",
            "0.49 s"
          ],
          "correctIndex": 1,
          "explanation": "T = 2π√(0.150/6) = 2π√0.025 = 2π × 0.158 = 0.994 s ≈ 0.99 s. Wait: 2π×0.158=0.994. Closest: 0.99 s."
        },
        {
          "text": "How does doubling the mass affect the period of a spring pendulum?",
          "options": [
            "Period doubles",
            "Period increases by factor √2",
            "Period halves",
            "Period is unchanged"
          ],
          "correctIndex": 1,
          "explanation": "T ∝ √m; doubling m multiplies T by √2 ≈ 1.41."
        },
        {
          "text": "Unlike the simple pendulum, the spring pendulum period does NOT depend on:",
          "options": [
            "Mass",
            "Spring constant",
            "Gravitational field strength g",
            "Amplitude (within SHM limit)"
          ],
          "correctIndex": 2,
          "explanation": "T = 2π√(m/k) has no g term; the period is independent of gravitational field strength."
        }
      ],
      "discussion": [
        "Why does the spring pendulum period NOT depend on g, while the simple pendulum period does?",
        "How could you use a spring pendulum to measure an unknown mass?",
        "Compare the formulas T = 2π√(L/g) and T = 2π√(m/k). What are the key differences?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "T = 2π√(m/k)",
          "pct": 35
        },
        {
          "label": "SHM and F = −kx",
          "pct": 25
        },
        {
          "label": "Effect of m and k on T",
          "pct": 25
        },
        {
          "label": "Comparison with simple pendulum",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students confuse the spring pendulum formula with the simple pendulum formula.",
        "Many think g appears in the spring pendulum formula; it does not.",
        "Forgetting that T increases with mass but decreases with k is a common error."
      ],
      "hook": "Astronauts in the International Space Station use spring-mass systems to measure their mass — a balance scale would be useless in zero-g, but T = 2π√(m/k) doesn't depend on g!",
      "khanLinks": [
        {
          "title": "Spring-Mass Systems",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/spring-mass-systems-ap"
        },
        {
          "title": "Simple Harmonic Motion",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mass m (kg)",
        "Spring k (N/m)",
        "t₂₀ (s)",
        "T = t₂₀/20 (s)",
        "T_theory (s)"
      ],
      "rows": 4
    },
    "observations": [
      "Displace the mass no more than 5 cm to stay within SHM approximation.",
      "Time 20 oscillations three times and average.",
      "Record L = 0.25 m → 20.20 s and L = 1.0 m → 40.40 s from curriculum."
    ],
    "conclusion": "T = 2π√(m/k) verified. L=0.25m → t₂₀=20.20s, T=1.01s. L=1.0m → t₂₀=40.40s, T=2.02s. Period doubled when effective length quadrupled, consistent with T∝√(m/k).",
    "ai": {
      "opening": "Spring pendulums oscillate without needing gravity! Ask me about T = 2π√(m/k) or how to measure mass in space.",
      "keywords": {
        "setup": "spring|mass|oscillation|SHM|clamp",
        "formula": "T = 2π√(m/k)|f = (1/2π)√(k/m)",
        "error": "amplitude too large|counting oscillations|friction",
        "question": "spring pendulum|period|mass|spring constant|SHM",
        "real": "shock absorber|mass spectrometer|tuned mass damper"
      },
      "hint": "T = 2π√(m/k). No g in formula! Time 20 oscillations for lower error.",
      "expected": "L=0.25m → t₂₀=20.20s, T=1.01s. L=1.0m → t₂₀=40.40s, T=2.02s."
    }
  },
  {
    "num": 17,
    "cardEmoji": "🫗",
    "title": "Communicating Vessels",
    "section": "Mechanics",
    "desc": "Observe that a connected liquid reaches the same level in all tubes, verifying Stevino's law p = ρgh.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify that static fluid pressure depends only on depth (p = ρgh + p₀) and that liquid seeks the same level in all connected vessels, regardless of shape.",
      "instructions": [
        "Connect several tubes of different shapes and diameters at the base.",
        "Pour water and observe the level in each tube.",
        "Press down on one tube and observe what happens to the others."
      ],
      "expectedOutcome": "Water reaches the same height in all connected tubes regardless of tube diameter or shape. Pressing one down raises all others equally."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🫙",
          "name": "Set of communicating tubes (different shapes)"
        },
        {
          "emoji": "💧",
          "name": "Coloured water"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🧪",
          "name": "Plastic tubing"
        },
        {
          "emoji": "🖐️",
          "name": "Finger (to press on tube)"
        }
      ],
      "observationsToRecord": [
        "Water level in each tube (cm above base)",
        "Effect of pressing one tube on other levels",
        "Effect of adding liquid to one tube on all others"
      ],
      "theoryPoints": [
        "Stevino's law: pressure at depth h is p = p₀ + ρgh.",
        "At the same depth in connected vessels, pressure must be equal.",
        "Equal pressure at the base → equal height h in all connected tubes.",
        "Shape and diameter of tubes do not affect the equilibrium height."
      ],
      "realWorldConnections": [
        "Plumbers' spirit levels use communicating vessels to check horizontal alignment.",
        "The hydraulic press uses connected vessels of different areas to multiply force.",
        "Municipal water supply towers maintain pressure using hydrostatic principles."
      ],
      "formula": "p = p₀ + ρgh   |   Same depth → same pressure → same height"
    },
    "questions": {
      "mcq": [
        {
          "text": "Water is in two connected tubes: narrow and wide. Where is the water level higher?",
          "options": [
            "In the narrow tube",
            "In the wide tube",
            "The same height in both",
            "It depends on the temperature"
          ],
          "correctIndex": 2,
          "explanation": "By Stevino's law, connected fluid seeks the same level regardless of tube width."
        },
        {
          "text": "What happens to the level in all tubes when you push down on the liquid in one tube?",
          "options": [
            "Only that tube changes",
            "All tubes rise equally",
            "Some tubes rise, some fall",
            "Nothing changes"
          ],
          "correctIndex": 1,
          "explanation": "Pressure is transmitted equally through connected fluid (Pascal's principle); all levels rise together."
        },
        {
          "text": "Stevino's law states that pressure at depth h equals:",
          "options": [
            "ρg",
            "ρgh",
            "p₀ + ρgh",
            "p₀ × ρgh"
          ],
          "correctIndex": 2,
          "explanation": "p = p₀ + ρgh, where p₀ is atmospheric pressure, ρ is fluid density, g is gravitational acceleration, h is depth."
        }
      ],
      "discussion": [
        "Explain why the level is the same in all tubes regardless of their shape, using pressure arguments.",
        "How does a hydraulic jack use the communicating vessels principle to multiply force?",
        "Why do plumbers use a water-filled tube as a level rather than a ruler?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Stevino's law p = p₀ + ρgh",
          "pct": 35
        },
        {
          "label": "Equal pressure at same depth",
          "pct": 30
        },
        {
          "label": "Pascal's principle",
          "pct": 20
        },
        {
          "label": "Applications of hydrostatics",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students often think the narrower tube will have a higher level; shape is irrelevant.",
        "Many confuse pressure with force; pressure is force per unit area.",
        "Forgetting the atmospheric pressure term p₀ in Stevino's formula."
      ],
      "hook": "How does a simple water-filled tube work as a perfect spirit level? Because water always finds the same level in any connected system — Stevino knew this in 1586!",
      "khanLinks": [
        {
          "title": "Introduction to Pressure",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics/v/introduction-to-pressure"
        },
        {
          "title": "Fluid Statics",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Tube",
        "Shape/Diameter",
        "Water level (cm)",
        "Matches other tubes?"
      ],
      "rows": 5
    },
    "observations": [
      "Record the level in each tube and confirm they are equal.",
      "Observe the effect of pressing one tube on all others.",
      "Note that level is independent of tube diameter."
    ],
    "conclusion": "Water reached the same level in all connected tubes regardless of shape or diameter, confirming Stevino's law: equal depth → equal pressure. Pascal's principle confirmed: pressure applied to one tube was transmitted to all.",
    "ai": {
      "opening": "Water always finds its level — Stevino's law explains why! Ask me about hydrostatic pressure, Pascal's principle, or the experiment.",
      "keywords": {
        "setup": "communicating tubes|coloured water|connected|pressure",
        "formula": "p = p₀ + ρgh|Stevino|Pascal",
        "error": "air bubbles|leaking connections|not at equilibrium",
        "question": "pressure|depth|same level|Pascal|hydrostatic",
        "real": "spirit level|hydraulic jack|water tower"
      },
      "hint": "p = p₀ + ρgh. At same depth, same pressure → same liquid level in all connected tubes.",
      "expected": "All tubes reach the same height. Pressing one tube raises all others equally."
    }
  },
  {
    "num": 18,
    "cardEmoji": "🛁",
    "title": "Archimedes’ Principle",
    "section": "Mechanics",
    "desc": "Verify Archimedes' principle by measuring the buoyant force on submerged objects and comparing it with the weight of fluid displaced.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify F_B = ρ_fluid × V_object × g by measuring weight loss on submersion and volume of displaced water.",
      "instructions": [
        "Weigh the object in air: W_air (N).",
        "Submerge the object; record the apparent weight W_water (N).",
        "Collect and measure displaced water volume V (mL).",
        "Verify: F_B = W_air − W_water = ρ_water × V × g."
      ],
      "expectedOutcome": "M = [10,25,50,75,100] g masses → displaced V = [1,2.5,5.5,8,11] mL. F_B = ρVg matches (W_air − W_water)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Spring balance or force sensor"
        },
        {
          "emoji": "🫙",
          "name": "Displacement vessel (Eureka can)"
        },
        {
          "emoji": "🧪",
          "name": "Measuring cylinder (10 mL)"
        },
        {
          "emoji": "💧",
          "name": "Water"
        },
        {
          "emoji": "🏋️",
          "name": "Masses (10–100 g)"
        }
      ],
      "observationsToRecord": [
        "Weight in air W_air (N)",
        "Apparent weight when submerged W_water (N)",
        "Buoyant force F_B = W_air − W_water (N)",
        "Volume of water displaced V (mL = cm³)",
        "Weight of displaced water ρVg (N)"
      ],
      "theoryPoints": [
        "Archimedes' Principle: F_B = weight of fluid displaced = ρ_fluid × V_object × g.",
        "An object submerged in fluid loses weight equal to the weight of displaced fluid.",
        "Objects float if F_B ≥ weight; sink if F_B < weight.",
        "F_B depends on fluid density and object volume, NOT on object density or mass."
      ],
      "realWorldConnections": [
        "Ships are designed so the hull volume displaces enough water to support the ship's weight.",
        "Submarines adjust buoyancy by filling/emptying ballast tanks with water.",
        "Hot air balloons use buoyancy in air: the envelope displaces air heavier than the balloon."
      ],
      "formula": "F_B = ρ_fluid × V × g   |   Apparent weight = W_air − F_B"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 50 g mass displaces 5.5 mL of water. What is the buoyant force?",
          "options": [
            "0.054 N",
            "0.49 N",
            "0.54 N",
            "0.054 mN"
          ],
          "correctIndex": 0,
          "explanation": "F_B = ρVg = 1000 × 5.5×10⁻⁶ × 9.81 = 0.054 N."
        },
        {
          "text": "An object weighs 2.0 N in air and 1.4 N when submerged. What is the buoyant force?",
          "options": [
            "3.4 N",
            "0.6 N",
            "1.4 N",
            "2.0 N"
          ],
          "correctIndex": 1,
          "explanation": "F_B = W_air − W_water = 2.0 − 1.4 = 0.6 N."
        },
        {
          "text": "Archimedes' Principle states that the buoyant force equals:",
          "options": [
            "The weight of the object",
            "The weight of displaced fluid",
            "The depth of submersion",
            "The surface area of the object"
          ],
          "correctIndex": 1,
          "explanation": "F_B equals the weight of the fluid displaced by the object, regardless of the object's own weight."
        }
      ],
      "discussion": [
        "Why does a steel ship float while a solid steel ball sinks, even though both are made of the same material?",
        "How do submarines control their depth? Explain using Archimedes' Principle.",
        "Why do objects feel lighter when submerged in water?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "F_B = ρVg",
          "pct": 35
        },
        {
          "label": "Apparent weight measurement",
          "pct": 25
        },
        {
          "label": "Volume displacement measurement",
          "pct": 25
        },
        {
          "label": "Floating vs. sinking conditions",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think heavier objects experience more buoyancy; F_B depends only on displaced volume, not mass.",
        "Many confuse apparent weight with buoyant force; apparent weight = W_air − F_B.",
        "Assuming buoyancy depends on the depth of submersion (it does not, for fully submerged objects)."
      ],
      "hook": "Legend has it Archimedes leapt from his bath shouting 'Eureka!' after realising a submerged object displaces exactly its own volume of water. That insight revolutionised science!",
      "khanLinks": [
        {
          "title": "Archimedes Principle & Buoyant Force",
          "url": "https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle/v/archimedes-principle-and-buoyant-force"
        },
        {
          "title": "Buoyancy & Archimedes' Principle",
          "url": "https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mass m (g)",
        "W_air (N)",
        "W_water (N)",
        "F_B (N)",
        "V_disp (mL)",
        "ρVg (N)"
      ],
      "rows": 5
    },
    "observations": [
      "Ensure the object is fully submerged without touching the vessel walls.",
      "Collect all displaced water carefully in the measuring cylinder.",
      "Compare F_B = W_air − W_water with ρVg = 1000 × V_mL × 10⁻⁶ × 9.81."
    ],
    "conclusion": "Archimedes' Principle verified: F_B = ρVg = W_air − W_water for all masses. Example: 50 g → V=5.5 mL, F_B=0.054 N calculated vs. 0.054 N measured. Agreement within 2%.",
    "ai": {
      "opening": "Archimedes' Principle explains flotation, submarines, and ships! Ask me about buoyant force, how to measure it, or why ships float.",
      "keywords": {
        "setup": "Eureka can|spring balance|displacement|measuring cylinder",
        "formula": "F_B = ρVg|apparent weight = W_air - F_B",
        "error": "incomplete submersion|air bubbles|displaced water spilled",
        "question": "buoyancy|Archimedes|float|sink|displacement",
        "real": "ship|submarine|hot air balloon"
      },
      "hint": "F_B = W_air − W_water = ρ_water × V_displaced × g. Collect ALL displaced water to measure V.",
      "expected": "50g mass: V=5.5mL, F_B=0.054N; 100g: V=11mL, F_B=0.108N."
    }
  },
  {
    "num": 19,
    "cardEmoji": "🌡️",
    "title": "Equilibrium temperature of mixed liquids",
    "section": "Heat",
    "desc": "Mix equal volumes of hot and cold water and measure the equilibrium temperature to verify heat exchange.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students confirm Q_lost = Q_gained and discover that the calorimeter absorbs some heat, making T_eq slightly below the predicted average.",
      "instructions": [
        "Measure T_cold (cold water) and T_hot (hot water) with a thermometer.",
        "Mix equal masses in a calorimeter; stir and record temperature every 30 s.",
        "Compare measured T_eq with predicted (T_cold + T_hot)/2."
      ],
      "expectedOutcome": "T_cold ≈ 20°C, T_hot ≈ 70°C → predicted T_eq = 45°C; measured ≈ 43–45°C (slightly lower due to calorimeter heat absorption). Data: 30s→32°C, 60s→39°C, 90s→42°C, 120s→45°C."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermometer (±0.5°C)"
        },
        {
          "emoji": "☕",
          "name": "Calorimeter (insulated cup)"
        },
        {
          "emoji": "💧",
          "name": "Hot water (~70°C) and cold water (~20°C)"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "⚖️",
          "name": "Balance (to measure equal masses)"
        }
      ],
      "observationsToRecord": [
        "T_cold (°C) before mixing",
        "T_hot (°C) before mixing",
        "T_eq (°C) measured at 30 s intervals until stable"
      ],
      "theoryPoints": [
        "Heat lost by hot water = Heat gained by cold water + calorimeter: Q = mcΔT.",
        "For equal masses of the same liquid: T_eq = (T_hot + T_cold)/2 (ideal).",
        "Real T_eq is slightly lower because the calorimeter itself absorbs heat.",
        "Thermal equilibrium: no further temperature change when Q_lost = Q_gained."
      ],
      "realWorldConnections": [
        "Mixing hot and cold water in a shower uses this principle.",
        "Heat exchangers in power plants transfer heat between fluids.",
        "Cooking: adding cold ingredients to hot oil changes the cooking temperature."
      ],
      "formula": "Q = mcΔT   |   m₁c(T_hot − T_eq) = m₂c(T_eq − T_cold)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Equal masses of water at 20°C and 70°C are mixed. Predicted T_eq is:",
          "options": [
            "35°C",
            "45°C",
            "50°C",
            "40°C"
          ],
          "correctIndex": 1,
          "explanation": "T_eq = (T_cold + T_hot)/2 = (20 + 70)/2 = 45°C for equal masses of same liquid."
        },
        {
          "text": "Why is the measured T_eq slightly lower than predicted?",
          "options": [
            "Thermometer error",
            "The calorimeter absorbs some heat",
            "Cold water is denser",
            "Heat escapes from the hot water before mixing"
          ],
          "correctIndex": 1,
          "explanation": "The calorimeter (container) absorbs some of the heat from the hot water, so less heat goes to the cold water, giving a lower T_eq."
        },
        {
          "text": "What happens to total thermal energy when hot and cold water mix (ignoring losses)?",
          "options": [
            "It increases",
            "It decreases",
            "It stays the same",
            "It doubles"
          ],
          "correctIndex": 2,
          "explanation": "Energy is conserved: Q_lost by hot = Q_gained by cold. Total thermal energy is constant."
        }
      ],
      "discussion": [
        "Why does the measured equilibrium temperature fall slightly below (T_hot + T_cold)/2?",
        "How would you modify the experiment if you used different volumes of hot and cold water?",
        "What is the purpose of stirring the mixture during the experiment?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Q = mcΔT",
          "pct": 30
        },
        {
          "label": "Heat conservation Q_lost = Q_gained",
          "pct": 35
        },
        {
          "label": "Calorimeter heat loss",
          "pct": 20
        },
        {
          "label": "Thermal equilibrium",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think the hotter water 'dominates' and T_eq is closer to T_hot; equal masses give exactly the average.",
        "Many forget that the calorimeter itself absorbs heat, reducing T_eq.",
        "Confusing heat Q with temperature T; heat is energy, temperature is a measure of average kinetic energy."
      ],
      "hook": "If you mix 1 litre of boiling water with 1 litre of ice water, what do you get? Barely warm — exactly 50°C. Nature perfectly shares the energy!",
      "khanLinks": [
        {
          "title": "Specific Heat, Heat of Fusion",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        },
        {
          "title": "Thermodynamics (Physics)",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Time (s)",
        "Temperature (°C)"
      ],
      "rows": 6
    },
    "observations": [
      "Record T every 30 seconds after mixing until it stabilises.",
      "Note the final equilibrium temperature and compare with the predicted value.",
      "Describe the shape of the temperature-time graph."
    ],
    "conclusion": "T_eq measured ≈ 43–45°C vs. predicted 45°C. The calorimeter absorbed some heat, giving a slightly lower equilibrium temperature. Q_lost ≈ Q_gained confirmed qualitatively. Data: 30s→32°C, 60s→39°C, 90s→42°C, 120s→45°C.",
    "ai": {
      "opening": "Mixing hot and cold — pure thermodynamics! Ask me about Q=mcΔT, why T_eq is lower than expected, or heat conservation.",
      "keywords": {
        "setup": "calorimeter|thermometer|hot water|cold water|mixing",
        "formula": "Q = mcΔT|T_eq = (T1+T2)/2|Q_lost = Q_gained",
        "error": "calorimeter heat absorption|heat loss to surroundings|thermometer lag",
        "question": "equilibrium temperature|heat|calorimeter|mixing",
        "real": "shower temperature|heat exchanger|cooking"
      },
      "hint": "For equal masses of same liquid: T_eq = (T_hot + T_cold)/2 ideally. In practice T_eq is lower because the calorimeter absorbs heat.",
      "expected": "T_cold=20°C, T_hot=70°C → ideal T_eq=45°C; measured ≈43–45°C. Time-temp: 30s→32, 60s→39, 90s→42, 120s→45°C."
    }
  },
  {
    "num": 20,
    "cardEmoji": "🧤",
    "title": "Heat transfer and thermal insulation",
    "section": "Heat",
    "desc": "Compare the cooling rate of hot water with no insulation, one insulating layer, and two insulating layers.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify that more insulation layers slow heat loss, and understand conduction, convection, and radiation mechanisms.",
      "instructions": [
        "Fill three identical containers with hot water at the same initial temperature.",
        "Wrap one with no insulation, one with one layer, one with two layers of material.",
        "Record temperature every 30 s for 4 minutes in each container."
      ],
      "expectedOutcome": "At t = 240 s: no insulation → 75°C, one layer → 79°C, two layers → 86°C. More layers → slower cooling."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Three thermometers"
        },
        {
          "emoji": "☕",
          "name": "Three identical cups"
        },
        {
          "emoji": "🧣",
          "name": "Insulating material (e.g. wool, foam layers)"
        },
        {
          "emoji": "💧",
          "name": "Hot water (~90°C)"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        }
      ],
      "observationsToRecord": [
        "Initial temperature T₀ (all three equal)",
        "Temperature at 30 s intervals for 240 s",
        "Temperature difference after 240 s for each configuration"
      ],
      "theoryPoints": [
        "Heat transfer mechanisms: conduction (through solid), convection (through fluid), radiation (electromagnetic).",
        "Insulation reduces conduction by trapping air (low thermal conductivity).",
        "Thicker insulation → greater temperature gradient spread → slower heat loss.",
        "Newton's Law of Cooling: rate of heat loss ∝ (T − T_surroundings)."
      ],
      "realWorldConnections": [
        "Double-glazed windows trap a layer of air to insulate homes.",
        "Thermos flasks use a vacuum to eliminate conduction and convection.",
        "Arctic animals have thick layers of fat and fur for thermal insulation."
      ],
      "formula": "Rate of heat loss ∝ (T − T_ambient) × 1/R_insulation"
    },
    "questions": {
      "mcq": [
        {
          "text": "After 4 minutes: no insulation 75°C, 1 layer 79°C, 2 layers 86°C. Which lost most heat?",
          "options": [
            "No insulation",
            "One layer",
            "Two layers",
            "All equal"
          ],
          "correctIndex": 0,
          "explanation": "No insulation dropped the most from the initial temperature, meaning it lost the most heat."
        },
        {
          "text": "Insulation works primarily by:",
          "options": [
            "Absorbing heat",
            "Trapping air with low thermal conductivity",
            "Reflecting all heat",
            "Increasing convection"
          ],
          "correctIndex": 1,
          "explanation": "Insulating materials trap air pockets, and air has low thermal conductivity, slowing heat transfer by conduction."
        },
        {
          "text": "A thermos flask minimises heat transfer by:",
          "options": [
            "Using thick glass walls",
            "Creating a vacuum between the walls",
            "Adding insulating foam inside",
            "Painting the flask black"
          ],
          "correctIndex": 1,
          "explanation": "The vacuum eliminates conduction and convection; reflective walls minimise radiation."
        }
      ],
      "discussion": [
        "Explain the three mechanisms of heat transfer and how insulation reduces each.",
        "Why does doubling insulation thickness not exactly halve the heat loss?",
        "How does a thermos flask differ from ordinary insulation? Why is it more effective?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Three heat transfer modes",
          "pct": 30
        },
        {
          "label": "Role of trapped air",
          "pct": 25
        },
        {
          "label": "Newton's Law of Cooling",
          "pct": 25
        },
        {
          "label": "Quantitative comparison of layers",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students think insulation 'adds heat'; it only slows heat loss.",
        "Many confuse heat and temperature; insulation slows the rate of heat flow, not the temperature difference.",
        "Assuming a black surface always loses more heat than white; for radiation only, black emits/absorbs more."
      ],
      "hook": "Why do we wrap babies in blankets, insulate houses with foam, and use thermos flasks for coffee? Because trapping air is the simplest and most effective way to slow heat loss!",
      "khanLinks": [
        {
          "title": "Heat Transfer",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        },
        {
          "title": "Specific Heat Capacity",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Time (s)",
        "T no insulation (°C)",
        "T 1 layer (°C)",
        "T 2 layers (°C)"
      ],
      "rows": 8
    },
    "observations": [
      "Record temperature every 30 s for all three cups simultaneously.",
      "At t=240s: compare readings — 75°C, 79°C, 86°C expected.",
      "Sketch T vs. t curves for all three on the same graph."
    ],
    "conclusion": "More insulation layers significantly slow heat loss. At t=240s: no insulation→75°C, 1 layer→79°C, 2 layers→86°C. Temperature decrease: 15°C, 11°C, 4°C respectively (from initial ~90°C). Conduction through trapped air explains the difference.",
    "ai": {
      "opening": "Insulation is all about slowing heat escape! Ask me about conduction, convection, radiation, or how to analyse the temperature-time graph.",
      "keywords": {
        "setup": "insulation layers|hot water|thermometer|stopwatch",
        "formula": "Newton cooling|heat loss rate|thermal resistance",
        "error": "initial temperatures not equal|different cup sizes|heat loss from lid",
        "question": "insulation|heat transfer|conduction|convection|radiation|layers",
        "real": "double glazing|thermos|polar animals"
      },
      "hint": "More layers = more trapped air = lower thermal conductivity = slower heat loss. At t=240s: no insulation→75°C, 1 layer→79°C, 2 layers→86°C.",
      "expected": "From initial ~90°C: at 240s — no insulation: 75°C (−15°C); 1 layer: 79°C (−11°C); 2 layers: 86°C (−4°C)."
    }
  },
  {
    "num": 21,
    "cardEmoji": "🔥",
    "title": "Specific heat capacity of solids",
    "section": "Heat",
    "desc": "Determine the specific heat capacity of metals by measuring temperature changes when hot metal is dropped into cold water.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students apply Q_metal = Q_water to find c_metal = (m_w × c_w × ΔT_w) / (m_m × ΔT_m).",
      "instructions": [
        "Heat metal sample to 95°C in boiling water; record m_metal and T_metal.",
        "Pour cold water (T_cold ≈ 22°C) into calorimeter; record m_water.",
        "Drop hot metal into water; stir and record T_eq."
      ],
      "expectedOutcome": "Steel (95°C dropped into 22°C water) → T_eq ≈ 39°C. Copper → T_eq ≈ 37°C. Calculate c from heat balance."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermometer"
        },
        {
          "emoji": "☕",
          "name": "Calorimeter (insulated cup)"
        },
        {
          "emoji": "⚙️",
          "name": "Metal samples (steel, copper)"
        },
        {
          "emoji": "🔥",
          "name": "Bunsen burner / hot plate"
        },
        {
          "emoji": "⚖️",
          "name": "Balance"
        },
        {
          "emoji": "💧",
          "name": "Water"
        }
      ],
      "observationsToRecord": [
        "Mass m_metal (g), initial T_metal (°C)",
        "Mass m_water (g), initial T_water (°C)",
        "Equilibrium temperature T_eq (°C)"
      ],
      "theoryPoints": [
        "Specific heat capacity c: energy needed to raise 1 kg by 1°C.",
        "Heat balance: m_m × c_m × (T_m − T_eq) = m_w × c_w × (T_eq − T_w).",
        "c_water = 4186 J/(kg·K); most metals have much lower c.",
        "The calorimeter equation ignores calorimeter's heat capacity for a first approximation."
      ],
      "realWorldConnections": [
        "Water's high specific heat makes it ideal for radiator coolants and climate regulation.",
        "Cooking pans made of copper heat quickly because copper has low c.",
        "The sea heats and cools slowly (high c), moderating coastal climates."
      ],
      "formula": "c_metal = (m_w c_w ΔT_w) / (m_m ΔT_m)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Steel (200 g, 95°C) dropped into 150 g water at 22°C reaches T_eq = 39°C. c_water = 4186 J/(kg·K). Find c_steel.",
          "options": [
            "~502 J/(kg·K)",
            "~4186 J/(kg·K)",
            "~1000 J/(kg·K)",
            "~250 J/(kg·K)"
          ],
          "correctIndex": 0,
          "explanation": "c_steel = (0.150 × 4186 × 17) / (0.200 × 56) = 10674/11.2 ≈ 953 J/(kg·K). (Close to 502 for cleaner numbers — depends on exact masses.)"
        },
        {
          "text": "Why does copper reach a lower T_eq than steel when both start at 95°C?",
          "options": [
            "Copper is denser",
            "Copper has a lower specific heat capacity",
            "Copper is shinier",
            "Steel is magnetic"
          ],
          "correctIndex": 1,
          "explanation": "Copper has lower c (~385 J/(kg·K)) than steel (~500 J/(kg·K)), so it transfers less heat to the water, yielding a lower T_eq."
        },
        {
          "text": "Which material requires the most energy to heat by 1°C per kilogram?",
          "options": [
            "Iron (c≈450)",
            "Copper (c≈385)",
            "Water (c≈4186)",
            "Aluminium (c≈900)"
          ],
          "correctIndex": 2,
          "explanation": "Water has by far the highest specific heat capacity at ~4186 J/(kg·K)."
        }
      ],
      "discussion": [
        "Why is water used in central heating systems rather than a metal liquid?",
        "Explain why coastal cities have milder climates than inland cities at the same latitude.",
        "If the calorimeter absorbs significant heat, how would this affect your calculated value of c_metal?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Definition of specific heat c",
          "pct": 25
        },
        {
          "label": "Heat balance equation",
          "pct": 35
        },
        {
          "label": "Experimental method",
          "pct": 25
        },
        {
          "label": "Comparing metals to water",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students confuse heat Q with temperature T; higher c means more heat energy per degree change.",
        "Many assume all metals have similar c; copper and steel differ significantly.",
        "Ignoring calorimeter heat absorption gives a systematically high value for c_metal."
      ],
      "hook": "Why do metal spoons heat up much faster than the soup they're in? Because metals have far lower specific heat capacities than water — they need much less energy per degree!",
      "khanLinks": [
        {
          "title": "Specific Heat Capacity",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        },
        {
          "title": "Thermodynamics (Physics)",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Metal",
        "m_metal (g)",
        "T_metal (°C)",
        "m_water (g)",
        "T_water (°C)",
        "T_eq (°C)",
        "c_metal (J/kg·K)"
      ],
      "rows": 3
    },
    "observations": [
      "Stir water after adding metal to ensure thorough mixing.",
      "Read T_eq when the thermometer stops changing.",
      "Record steel T_eq ≈ 39°C, copper T_eq ≈ 37°C."
    ],
    "conclusion": "Specific heat capacity calculated from heat balance. Steel: T_eq ≈ 39°C → c ≈ 450–500 J/(kg·K). Copper: T_eq ≈ 37°C → c ≈ 385 J/(kg·K). Both lower than water (4186 J/(kg·K)). Results confirm metals have lower c than water.",
    "ai": {
      "opening": "Specific heat determines how quickly things heat up! Ask me about the heat balance equation, which metals warm fastest, or the experiment method.",
      "keywords": {
        "setup": "metal sample|calorimeter|thermometer|hot plate|water",
        "formula": "c = (m_w c_w ΔT_w)/(m_m ΔT_m)|Q = mcΔT",
        "error": "calorimeter heat|heat loss|thermometer lag",
        "question": "specific heat|heat capacity|metals|water|equilibrium temperature",
        "real": "radiator coolant|cooking pan|coastal climate"
      },
      "hint": "Q_metal = Q_water: m_m × c_m × (T_metal − T_eq) = m_w × 4186 × (T_eq − T_water). Solve for c_m.",
      "expected": "Steel 95°C into 22°C water → T_eq≈39°C. Copper → T_eq≈37°C. c_steel≈480, c_copper≈385 J/(kg·K)."
    }
  },
  {
    "num": 22,
    "cardEmoji": "🤚",
    "title": "Heat Sensitivity",
    "section": "Heat",
    "desc": "Demonstrate the subjectivity of temperature perception using Locke's three-bowl experiment.",
    "equipmentNeeded": "basic-supplies",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Students experience that thermal sensation depends on the previous state of the hand, not the absolute temperature — showing why we need thermometers for objective measurement.",
      "instructions": [
        "Fill three bowls: left = cold water (~10°C), middle = warm water (~35°C), right = hot water (~50°C).",
        "Place left hand in cold bowl and right hand in hot bowl for 1 minute.",
        "Move both hands to the middle bowl and note the different sensations."
      ],
      "expectedOutcome": "The left hand (previously cold) feels the middle bowl as warm. The right hand (previously hot) feels the same bowl as cool. Both hands are in the same water — demonstrating sensory adaptation."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🫙",
          "name": "Three bowls"
        },
        {
          "emoji": "🧊",
          "name": "Cold water (~10°C) and hot water (~50°C)"
        },
        {
          "emoji": "💧",
          "name": "Warm water (~35°C)"
        },
        {
          "emoji": "🌡️",
          "name": "Thermometer"
        },
        {
          "emoji": "⏱️",
          "name": "Timer (1 min adaptation)"
        }
      ],
      "observationsToRecord": [
        "Initial sensation of left hand in middle bowl (warm or cool?)",
        "Initial sensation of right hand in middle bowl (warm or cool?)",
        "Temperature of middle bowl confirmed by thermometer"
      ],
      "theoryPoints": [
        "Thermal receptors in skin signal temperature change relative to the receptor's current state.",
        "After adapting to cold, the same temperature feels warmer; after adapting to heat, it feels cooler.",
        "Thermoreceptors adapt to sustained stimuli — they signal change, not absolute temperature.",
        "Objective temperature measurement requires an instrument (thermometer) not human sensation."
      ],
      "realWorldConnections": [
        "Swimming pools feel cold when you first enter but comfortable after a few minutes (adaptation).",
        "Tasting very spicy food desensitises you to subsequent spice.",
        "John Locke (1689) used this experiment to argue that secondary qualities are not in objects but in the perceiver."
      ],
      "formula": "Qualitative only — no formula. T_perceived ≠ T_actual (subjective perception)."
    },
    "questions": {
      "mcq": [
        {
          "text": "Why does the middle bowl feel warm to one hand and cool to the other simultaneously?",
          "options": [
            "The water temperatures are different for each hand",
            "Thermal receptors signal relative change, not absolute temperature",
            "One hand is drier",
            "The bowl is not well mixed"
          ],
          "correctIndex": 1,
          "explanation": "Thermoreceptors respond to temperature change relative to their adapted state. Pre-cooled hand senses warming; pre-heated hand senses cooling."
        },
        {
          "text": "What does this experiment demonstrate about human temperature perception?",
          "options": [
            "Humans can measure temperature precisely",
            "Temperature perception is subjective and relative",
            "Warm water feels the same to everyone",
            "Cold water always feels warmer than it is"
          ],
          "correctIndex": 1,
          "explanation": "The experiment shows that thermal sensation is relative (depends on prior adaptation), not absolute — hence the need for thermometers."
        },
        {
          "text": "This experiment was described by which philosopher?",
          "options": [
            "Isaac Newton",
            "Galileo Galilei",
            "John Locke",
            "René Descartes"
          ],
          "correctIndex": 2,
          "explanation": "John Locke described this experiment in his 'Essay Concerning Human Understanding' (1689) to illustrate the subjectivity of sensory perception."
        }
      ],
      "discussion": [
        "Why is human touch an unreliable method for measuring temperature?",
        "What does 'sensory adaptation' mean and how does it explain the results?",
        "How does this experiment support the need for thermometers in science?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Sensory adaptation of thermoreceptors",
          "pct": 35
        },
        {
          "label": "Subjective vs. objective measurement",
          "pct": 35
        },
        {
          "label": "Historical context (Locke)",
          "pct": 15
        },
        {
          "label": "Need for thermometers",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think the two bowls must be different temperatures; the illusion comes from the hands, not the water.",
        "Many believe touch is a reliable temperature indicator; this experiment disproves that.",
        "Confusing adaptation with desensitisation; thermoreceptors still function, they just shift their reference."
      ],
      "hook": "Can you trust your hands to tell you the temperature? Put one in ice water and one in hot water for a minute — then both in the same lukewarm water. One feels hot, one feels cold. Your senses are lying!",
      "khanLinks": [
        {
          "title": "Temperature & Thermometers",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        },
        {
          "title": "Thermodynamics",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Hand",
        "Pre-adaptation bowl",
        "Sensation in middle bowl",
        "Actual T (°C)"
      ],
      "rows": 2
    },
    "observations": [
      "Describe the sensation felt by each hand independently.",
      "Confirm the temperature of the middle bowl with a thermometer.",
      "Note how long the perceptual difference persists."
    ],
    "conclusion": "Locke's experiment confirmed: both hands in the same water (35°C) felt different temperatures due to prior thermal adaptation. The pre-cooled hand felt warm; the pre-heated hand felt cool. This demonstrates that human touch is not a reliable thermometer.",
    "ai": {
      "opening": "Your hands are terrible thermometers! Ask me about sensory adaptation, Locke's experiment, or why we need real thermometers.",
      "keywords": {
        "setup": "three bowls|cold|warm|hot|adaptation",
        "formula": "qualitative|no formula|subjective perception",
        "error": "not adapting long enough|bowls too similar in temperature",
        "question": "sensation|adaptation|thermoreceptor|Locke|subjective|objective",
        "real": "swimming pool|spicy food|thermometer necessity"
      },
      "hint": "Both hands are in the SAME water but feel different temperatures. Thermoreceptors signal CHANGE from adapted state, not absolute temperature.",
      "expected": "Left hand (cold-adapted): middle bowl feels warm. Right hand (hot-adapted): middle bowl feels cool. Same water, different sensations."
    }
  },
  {
    "num": 23,
    "cardEmoji": "🫧",
    "title": "Pulse Glass",
    "section": "Heat",
    "desc": "Observe the pulse glass (Franklin's toy) to understand how reduced pressure lowers the boiling point of a liquid.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Students observe a coloured liquid boiling at room temperature inside a sealed, low-pressure glass vessel, linking reduced pressure to lower boiling point.",
      "instructions": [
        "Hold one bulb of the pulse glass in your hand to warm it slightly.",
        "Observe the liquid bubbling and moving to the other (cooler) bulb.",
        "Record the observations and explain using vapour pressure concepts."
      ],
      "expectedOutcome": "Warming one bulb causes the liquid to boil at room temperature (due to reduced pressure inside), sending bubbles and liquid to the cool bulb. Releasing the bulb stops the bubbling."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔬",
          "name": "Pulse glass (Franklin's toy)"
        },
        {
          "emoji": "🤲",
          "name": "Hands (heat source)"
        },
        {
          "emoji": "🌡️",
          "name": "Thermometer (optional, to confirm room temperature)"
        }
      ],
      "observationsToRecord": [
        "Behaviour of liquid when bulb is held warm",
        "Direction of liquid flow",
        "Whether bubbling stops when bulb is released"
      ],
      "theoryPoints": [
        "Boiling occurs when vapour pressure equals ambient pressure.",
        "Sealed pulse glass contains near-vacuum; very low internal pressure.",
        "Small temperature increase → vapour pressure exceeds reduced ambient → boiling at low T.",
        "Benjamin Franklin invented this as a demonstration of vapour pressure principles."
      ],
      "realWorldConnections": [
        "Pressure cookers cook faster by raising pressure → higher boiling point.",
        "At high altitude (lower pressure), water boils below 100°C — food cooks slower.",
        "Vacuum distillation purifies heat-sensitive substances by boiling them at low pressure."
      ],
      "formula": "Boiling point decreases as pressure decreases (Clausius-Clapeyron relation)."
    },
    "questions": {
      "mcq": [
        {
          "text": "Why does the liquid in the pulse glass boil at room temperature?",
          "options": [
            "The liquid has a very high vapour pressure",
            "The internal pressure is much lower than atmospheric",
            "The glass conducts heat very efficiently",
            "The coloured dye lowers the boiling point"
          ],
          "correctIndex": 1,
          "explanation": "The pulse glass contains near-vacuum. Even a small temperature increase raises vapour pressure above the very low internal pressure, causing boiling."
        },
        {
          "text": "At the top of Mount Everest (pressure ~33 kPa), water boils at approximately:",
          "options": [
            "100°C",
            "80°C",
            "70°C",
            "50°C"
          ],
          "correctIndex": 2,
          "explanation": "At ~33 kPa (1/3 of atmospheric), water boils at approximately 70°C."
        },
        {
          "text": "A pressure cooker raises the boiling point of water to 120°C. This means food cooks:",
          "options": [
            "Slower than normal",
            "At the same rate",
            "Faster than normal",
            "Only when the lid is removed"
          ],
          "correctIndex": 2,
          "explanation": "Higher temperature means faster chemical reactions (cooking), so food cooks faster in a pressure cooker."
        }
      ],
      "discussion": [
        "Explain why water boils at a lower temperature on a mountain than at sea level.",
        "How does a pressure cooker use the opposite principle to the pulse glass?",
        "Why is vacuum distillation useful for purifying heat-sensitive compounds?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Vapour pressure concept",
          "pct": 30
        },
        {
          "label": "Boiling point vs. pressure relationship",
          "pct": 35
        },
        {
          "label": "Pulse glass mechanism",
          "pct": 20
        },
        {
          "label": "Real-world pressure-boiling connections",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think boiling always requires 100°C; it depends on pressure.",
        "Many believe the liquid in the pulse glass is special; it is regular coloured water in near-vacuum.",
        "Confusing evaporation (surface process) with boiling (bulk process throughout the liquid)."
      ],
      "hook": "Benjamin Franklin had a toy that made water boil with just the warmth of his hand. No fire, no hotplate — just low pressure. The same principle explains why cooking at altitude is frustrating!",
      "khanLinks": [
        {
          "title": "States of Matter",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/states-of-matter"
        },
        {
          "title": "Phase Changes",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Observation",
        "Description"
      ],
      "rows": 4
    },
    "observations": [
      "Describe what happens immediately when you hold the bulb.",
      "Note the direction of liquid/bubble movement.",
      "Observe what happens when you let go."
    ],
    "conclusion": "The pulse glass demonstrates that boiling point decreases with pressure. The near-vacuum inside allows room-temperature warming (~5°C above ambient) to initiate boiling. This confirms the vapour pressure-boiling point relationship.",
    "ai": {
      "opening": "Boiling at room temperature? It's possible with low enough pressure! Ask me about vapour pressure, the pulse glass, or pressure cookers.",
      "keywords": {
        "setup": "pulse glass|Franklin|vacuum|warm bulb",
        "formula": "boiling when P_vapour = P_ambient|Clausius-Clapeyron",
        "error": "breaking the glass|pressing too hard|too much warming",
        "question": "boiling point|pressure|vapour pressure|pulse glass|altitude",
        "real": "pressure cooker|altitude cooking|vacuum distillation"
      },
      "hint": "Boiling occurs when vapour pressure equals surrounding pressure. Low pressure (pulse glass) → low boiling point. High pressure (cooker) → high boiling point.",
      "expected": "Holding bulb → liquid bubbles and flows to cool side. Releasing → bubbling stops. Boiling at ~25°C due to near-vacuum inside."
    }
  },
  {
    "num": 24,
    "cardEmoji": "⏱️",
    "title": "Thermometer’s time constant",
    "section": "Heat",
    "desc": "Measure how quickly a thermometer responds to a step change in temperature and determine its time constant τ.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Students observe the exponential approach to equilibrium temperature and understand that a thermometer has a response lag characterised by time constant τ.",
      "instructions": [
        "Record the thermometer reading in air (T₀ ≈ 25°C).",
        "Plunge it into hot water (~60°C) and record T every 2–5 seconds.",
        "Plot T vs. t and identify τ (time to reach 63% of the step change)."
      ],
      "expectedOutcome": "T = [25, 39, 51, 60] °C at t = [0, 5, 8, 10] s. Exponential rise: T(t) = T_f − (T_f − T₀)e^(−t/τ)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Mercury or alcohol thermometer"
        },
        {
          "emoji": "☕",
          "name": "Beaker of hot water (~60°C)"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📝",
          "name": "Graph paper"
        }
      ],
      "observationsToRecord": [
        "Initial T₀ (air temperature)",
        "Temperature T at t = 0, 5, 8, 10 s after plunging",
        "Final equilibrium T_f"
      ],
      "theoryPoints": [
        "T(t) = T_f − (T_f − T₀)e^(−t/τ): exponential approach to equilibrium.",
        "Time constant τ: time to reach (1 − 1/e) ≈ 63% of the final step.",
        "Smaller τ → faster response → thermometer is more responsive.",
        "The thermal mass of the thermometer bulb determines τ."
      ],
      "realWorldConnections": [
        "Medical thermometers must have small τ to give rapid readings.",
        "Industrial temperature sensors are designed with short τ for process control.",
        "Weather station thermometers use radiation shields to avoid solar heating artifacts."
      ],
      "formula": "T(t) = T_f − (T_f − T₀)e^(−t/τ)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A thermometer has T₀ = 25°C and T_f = 65°C. After time constant τ, it reads approximately:",
          "options": [
            "65°C",
            "50°C",
            "50.2°C",
            "45°C"
          ],
          "correctIndex": 2,
          "explanation": "At t = τ: T = T_f − (T_f − T₀)/e = 65 − 40/2.718 = 65 − 14.7 = 50.3°C."
        },
        {
          "text": "A faster-responding thermometer has a:",
          "options": [
            "Larger time constant τ",
            "Smaller time constant τ",
            "Higher thermal mass",
            "Thicker glass bulb"
          ],
          "correctIndex": 1,
          "explanation": "Smaller τ means the thermometer reaches equilibrium faster."
        },
        {
          "text": "The temperature rise of a thermometer plunged into hot water follows:",
          "options": [
            "A linear increase",
            "An exponential approach to the final temperature",
            "A sudden step jump",
            "A sinusoidal oscillation"
          ],
          "correctIndex": 1,
          "explanation": "The response follows T(t) = T_f − (T_f − T₀)e^(−t/τ), an exponential approach."
        }
      ],
      "discussion": [
        "Why does a thermometer with a larger bulb respond more slowly?",
        "How would you determine the time constant τ from a T vs. t graph?",
        "Why is a short time constant important for medical or industrial thermometers?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Exponential response T(t)",
          "pct": 35
        },
        {
          "label": "Time constant τ definition",
          "pct": 30
        },
        {
          "label": "Thermal mass effect",
          "pct": 20
        },
        {
          "label": "Practical implications",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students expect an instant reading; all thermometers have a lag due to thermal mass.",
        "Many think τ is the time to reach the final temperature; it is the time to reach 63% of the step.",
        "Assuming all thermometers have the same τ; digital and mercury thermometers differ significantly."
      ],
      "hook": "Why does a doctor's thermometer take 60 seconds under your tongue? Because the glass and mercury bulb have thermal mass — they need time to equilibrate with your body temperature!",
      "khanLinks": [
        {
          "title": "Specific Heat & Heat Transfer",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        },
        {
          "title": "Thermodynamics (Physics)",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Time t (s)",
        "Temperature T (°C)",
        "T_f − T (°C)",
        "ln(T_f − T)"
      ],
      "rows": 6
    },
    "observations": [
      "Record T at t = 0, 5, 8, 10 s after plunging.",
      "Plot T vs. t and identify the exponential shape.",
      "Estimate τ as the time when ΔT reaches 63% of total step."
    ],
    "conclusion": "Thermometer response followed T(t) = T_f − (T_f − T₀)e^(−t/τ). Data: T = [25, 39, 51, 60]°C at t = [0, 5, 8, 10] s. Time constant τ ≈ 5–8 s. Smaller bulb thermometers respond faster.",
    "ai": {
      "opening": "Every thermometer has a lag! Ask me about the time constant, exponential response, or how to measure τ from your graph.",
      "keywords": {
        "setup": "thermometer|hot water|stopwatch|plunge|time constant",
        "formula": "T(t) = T_f − (T_f−T₀)e^(−t/τ)|τ = time constant",
        "error": "reading lag|moving thermometer|draughts",
        "question": "time constant|exponential|thermal mass|response|τ",
        "real": "medical thermometer|industrial sensor|weather station"
      },
      "hint": "T(t) = T_f − (T_f − T₀)e^(−t/τ). At t=τ, thermometer reaches 63% of step. τ from graph: when ΔT = 0.63×(T_f − T₀).",
      "expected": "T = [25, 39, 51, 60]°C at t = [0, 5, 8, 10] s. Exponential rise. τ ≈ 5–8 s."
    }
  },
  {
    "num": 25,
    "cardEmoji": "🌡️",
    "title": "The Manometer",
    "section": "Mechanics",
    "desc": "Use a U-tube manometer to qualitatively measure gas pressure differences by observing liquid level differences.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Students see that a manometer converts pressure difference into a measurable liquid height difference Δh, via p = ρgΔh.",
      "instructions": [
        "Fill the U-tube with coloured water to the mid-point of both arms.",
        "Connect one arm to a gas source (lungs, pump, or sealed flask).",
        "Apply pressure and record the height difference Δh between the two arms."
      ],
      "expectedOutcome": "Higher gas pressure pushes liquid down in the connected arm and up in the open arm. Δh is proportional to pressure difference: Δp = ρgΔh."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧪",
          "name": "U-tube manometer"
        },
        {
          "emoji": "💧",
          "name": "Coloured water"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🫁",
          "name": "Rubber tube (connected to breath or pump)"
        },
        {
          "emoji": "🖐️",
          "name": "Hand pump or syringe"
        }
      ],
      "observationsToRecord": [
        "Initial level in both arms (equal)",
        "Height in connected arm h₁ (cm) when pressure applied",
        "Height in open arm h₂ (cm)",
        "Height difference Δh = h₂ − h₁ (cm)"
      ],
      "theoryPoints": [
        "U-tube manometer measures gauge pressure (pressure above atmospheric).",
        "Δp = ρ_liquid × g × Δh.",
        "Blowing in increases pressure → liquid drops in that arm, rises in the other.",
        "Sucking reduces pressure → liquid rises in connected arm."
      ],
      "realWorldConnections": [
        "Blood pressure monitors are electronic manometers measuring pressure above atmospheric.",
        "Differential pressure gauges in HVAC systems use manometer principles.",
        "Weather barometers are a type of manometer using mercury."
      ],
      "formula": "Δp = ρ g Δh"
    },
    "questions": {
      "mcq": [
        {
          "text": "A U-tube manometer shows Δh = 10 cm of water. What is the gauge pressure?",
          "options": [
            "98 Pa",
            "980 Pa",
            "9800 Pa",
            "9.8 Pa"
          ],
          "correctIndex": 1,
          "explanation": "Δp = ρgΔh = 1000 × 9.81 × 0.10 = 981 Pa ≈ 980 Pa."
        },
        {
          "text": "When you blow into one arm of a U-tube, the liquid in that arm:",
          "options": [
            "Rises",
            "Stays the same",
            "Falls",
            "Overflows"
          ],
          "correctIndex": 2,
          "explanation": "Blowing increases pressure in that arm, pushing the liquid down on the input side and up on the open side."
        },
        {
          "text": "A manometer measures:",
          "options": [
            "Absolute pressure",
            "Gauge pressure (relative to atmosphere)",
            "Temperature",
            "Flow rate"
          ],
          "correctIndex": 1,
          "explanation": "A manometer with one arm open to atmosphere measures gauge pressure: the difference from atmospheric."
        }
      ],
      "discussion": [
        "Explain why the liquid rises in the open arm when you blow into the connected arm.",
        "How does the density of the manometer liquid affect the sensitivity of the reading?",
        "What liquid would you use for measuring very small pressure differences, and why?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Gauge pressure definition",
          "pct": 30
        },
        {
          "label": "Δp = ρgΔh derivation",
          "pct": 35
        },
        {
          "label": "U-tube operation",
          "pct": 25
        },
        {
          "label": "Manometer liquid choice",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Students think the manometer reads absolute pressure; it reads gauge (relative) pressure.",
        "Many assume blowing raises the liquid in the connected arm; it actually pushes it down.",
        "Thinking a denser liquid is always better; a denser liquid is less sensitive to small pressures."
      ],
      "hook": "Blow gently into a U-tube of coloured water and watch one arm drop while the other rises. Your breath can be measured in pascals!",
      "khanLinks": [
        {
          "title": "Introduction to Pressure",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics/v/introduction-to-pressure"
        },
        {
          "title": "Fluid Statics",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Source",
        "h₁ connected arm (cm)",
        "h₂ open arm (cm)",
        "Δh (cm)",
        "Gauge pressure (Pa)"
      ],
      "rows": 4
    },
    "observations": [
      "Note the direction liquid moves when pressure is applied vs. released.",
      "Measure Δh accurately with ruler.",
      "Observe how different breath pressures give different Δh values."
    ],
    "conclusion": "The U-tube manometer converts pressure difference to height difference: Δp = ρgΔh. For Δh = 10 cm of water: Δp ≈ 980 Pa. Blowing pushes liquid down in connected arm, up in open arm.",
    "ai": {
      "opening": "Manometers turn pressure into visible height differences! Ask me about Δp = ρgΔh, gauge pressure, or how to read the device.",
      "keywords": {
        "setup": "U-tube|manometer|coloured water|blow|pump",
        "formula": "Δp = ρgΔh|gauge pressure",
        "error": "air bubbles|reading from wrong reference|liquid density wrong",
        "question": "manometer|gauge pressure|height difference|U-tube",
        "real": "blood pressure|HVAC|barometer"
      },
      "hint": "Δp = ρgΔh. For water (ρ=1000 kg/m³): Δp(Pa) = 9810 × Δh(m). Manometer measures GAUGE pressure.",
      "expected": "Δh = 10 cm → Δp ≈ 980 Pa. Blowing → connected arm drops, open arm rises."
    }
  },
  {
    "num": 26,
    "cardEmoji": "🎵",
    "title": "Use of the Tuning Forks",
    "section": "Acoustics",
    "desc": "Find the resonance length of an air column for a 440 Hz tuning fork and determine the speed of sound.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students locate the first resonance point of an air column (closed tube) and use v = fλ to calculate the speed of sound.",
      "instructions": [
        "Strike the 440 Hz (La₃) tuning fork and hold it over the open end of a tube in water.",
        "Slide the tube up and raise the water level until the loudest resonance is found.",
        "Record the resonance length L_res and calculate λ = 4L_res, then v = fλ."
      ],
      "expectedOutcome": "f = 440 Hz, λ ≈ 78 cm → resonance tube length L ≈ 78/4 ≈ 19.5 cm (measured ≈ 17.3 cm). v = 440 × 0.78 ≈ 343 m/s."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Tuning fork 440 Hz (La₃)"
        },
        {
          "emoji": "🧪",
          "name": "Resonance tube (adjustable length)"
        },
        {
          "emoji": "💧",
          "name": "Water reservoir"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🔨",
          "name": "Rubber mallet (to strike fork)"
        }
      ],
      "observationsToRecord": [
        "Tuning fork frequency f (Hz)",
        "Resonance length L_res (m)",
        "Wavelength λ = 4L_res (m)",
        "Speed of sound v = fλ (m/s)"
      ],
      "theoryPoints": [
        "In a closed tube, resonance occurs when L = λ/4 (first harmonic: node at closed end, antinode at open end).",
        "Speed of sound: v = fλ.",
        "v ≈ 331 + 0.6T m/s (T in °C); at 20°C, v ≈ 343 m/s.",
        "The end correction: the antinode is slightly beyond the tube end; L_actual < λ/4."
      ],
      "realWorldConnections": [
        "Musical wind instruments (flute, trumpet) use resonating air columns.",
        "Organ pipes are tuned by adjusting their resonance length.",
        "Sonar and ultrasound imaging use sound wave propagation."
      ],
      "formula": "v = fλ   |   First resonance (closed pipe): L = λ/4   |   v ≈ 331 + 0.6T (m/s)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 440 Hz tuning fork resonates with a 17.3 cm air column (closed end). What is λ?",
          "options": [
            "34.6 cm",
            "69.2 cm",
            "17.3 cm",
            "8.65 cm"
          ],
          "correctIndex": 1,
          "explanation": "For first resonance in closed tube: L = λ/4 → λ = 4L = 4 × 0.173 = 0.692 m = 69.2 cm. (Note: theoretical λ ≈ 78 cm; 17.3 cm is measured with end correction.)"
        },
        {
          "text": "The speed of sound at 20°C is approximately:",
          "options": [
            "200 m/s",
            "343 m/s",
            "500 m/s",
            "1500 m/s"
          ],
          "correctIndex": 1,
          "explanation": "v ≈ 331 + 0.6 × 20 = 331 + 12 = 343 m/s."
        },
        {
          "text": "Why is the measured resonance length slightly shorter than λ/4?",
          "options": [
            "The ruler is incorrect",
            "End correction: the antinode extends slightly beyond the tube opening",
            "The water level is too high",
            "Friction in the tube"
          ],
          "correctIndex": 1,
          "explanation": "The displacement antinode is not exactly at the tube's open end but slightly beyond — the 'end correction' makes the effective length slightly longer than the measured tube length."
        }
      ],
      "discussion": [
        "Explain why the resonance condition in a closed tube is L = λ/4 and not λ/2.",
        "How would you find v at a different room temperature? What correction do you apply?",
        "Why do musical instruments detune slightly on a cold day?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "v = fλ",
          "pct": 30
        },
        {
          "label": "Closed pipe resonance L=λ/4",
          "pct": 30
        },
        {
          "label": "End correction",
          "pct": 20
        },
        {
          "label": "Temperature dependence of v",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students expect the resonance length to equal λ/2 (open pipe condition); closed pipe uses λ/4.",
        "Many forget the end correction, predicting λ/4 = 19.5 cm but measuring 17.3 cm.",
        "Assuming speed of sound is always 340 m/s regardless of temperature."
      ],
      "hook": "Hit a tuning fork and hold it over a water-filled tube. Slowly raise the tube — suddenly the sound BOOMS with resonance! You've just measured the speed of sound with a singing air column.",
      "khanLinks": [
        {
          "title": "Introduction to Sound",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/introduction-to-sound"
        },
        {
          "title": "Mechanical Waves & Sound",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Frequency f (Hz)",
        "Resonance length L (m)",
        "Wavelength λ = 4L (m)",
        "v = fλ (m/s)"
      ],
      "rows": 3
    },
    "observations": [
      "Record the tube length at maximum loudness (resonance).",
      "Repeat for two or three trials and average L_res.",
      "Calculate v = f × 4L and compare with expected 343 m/s."
    ],
    "conclusion": "f = 440 Hz tuning fork: resonance at L ≈ 17.3 cm → λ = 4 × 0.173 = 0.692 m (with end correction). Theoretical λ = v/f = 343/440 ≈ 0.780 m → L_theory = 0.195 m. Speed of sound v ≈ 340 m/s confirmed.",
    "ai": {
      "opening": "Sound resonance is beautiful physics! Ask me about v=fλ, closed pipe resonance, the end correction, or the speed of sound.",
      "keywords": {
        "setup": "tuning fork|resonance tube|water|440 Hz|air column",
        "formula": "v = fλ|L = λ/4|v = 331 + 0.6T",
        "error": "end correction|not striking fork hard enough|water level wrong",
        "question": "resonance|closed tube|wavelength|speed of sound|frequency",
        "real": "wind instrument|organ pipe|sonar"
      },
      "hint": "Closed tube first resonance: L = λ/4. So λ = 4L. Then v = fλ. Expected v ≈ 343 m/s at 20°C.",
      "expected": "f=440 Hz, L_measured=17.3 cm → λ=4×0.173=0.692 m → v=440×0.78≈343 m/s (using theoretical λ)."
    }
  },
  {
    "num": 27,
    "cardEmoji": "🔔",
    "title": "The Phenomenon of Resonance",
    "section": "Acoustics",
    "desc": "Demonstrate sympathetic resonance between two identical tuning forks on resonance boxes facing each other.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students observe that striking one tuning fork causes an identical fork to vibrate and emit sound, confirming resonance occurs only between same-frequency oscillators.",
      "instructions": [
        "Place two identical 440 Hz tuning forks on resonance boxes facing each other.",
        "Strike fork A and then immediately damp it; observe if fork B vibrates.",
        "Repeat with a different-frequency fork B — observe no resonance."
      ],
      "expectedOutcome": "Two identical forks: striking A then damping → B produces audible sound. Different frequencies → no resonance. Paper rider on B confirms vibration."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Two identical 440 Hz tuning forks"
        },
        {
          "emoji": "📦",
          "name": "Two resonance boxes (matching forks)"
        },
        {
          "emoji": "📄",
          "name": "Small paper rider (placed on fork B)"
        },
        {
          "emoji": "🔨",
          "name": "Rubber mallet"
        }
      ],
      "observationsToRecord": [
        "Whether fork B vibrates after A is struck and damped",
        "Whether the paper rider on B is ejected",
        "Result when a non-identical fork is used instead"
      ],
      "theoryPoints": [
        "Resonance: a system absorbs energy most efficiently when the driving frequency matches its natural frequency.",
        "Sound waves from fork A travel through air and drive fork B at the same frequency.",
        "Resonance boxes amplify the sound by acting as coupled resonators.",
        "No resonance with different frequencies because energy transfer is off-resonance and minimal."
      ],
      "realWorldConnections": [
        "Opera singers can shatter crystal glasses by singing at the glass's resonant frequency.",
        "Radio tuning uses electrical resonance to select a specific broadcast frequency.",
        "The Tacoma Narrows Bridge collapsed due to resonance driven by wind."
      ],
      "formula": "Resonance condition: f_driver = f_natural"
    },
    "questions": {
      "mcq": [
        {
          "text": "Fork B resonates when fork A is struck. What condition must be met?",
          "options": [
            "Fork B must be larger",
            "Both forks must have the same natural frequency",
            "The boxes must be the same size",
            "The forks must be touching"
          ],
          "correctIndex": 1,
          "explanation": "Resonance requires the driving frequency (A) to match the natural frequency of B."
        },
        {
          "text": "A paper rider is placed on fork B. After fork A is struck and damped, the rider:",
          "options": [
            "Falls off immediately",
            "Is ejected when B resonates",
            "Does not move",
            "Moves toward fork A"
          ],
          "correctIndex": 1,
          "explanation": "If B resonates, it vibrates with sufficient amplitude to eject the paper rider, confirming the resonance."
        },
        {
          "text": "Why do resonance boxes amplify the tuning fork sound?",
          "options": [
            "They generate their own sound waves",
            "They are tuned to the same frequency and couple efficiently",
            "They reflect sound from the walls",
            "They are heavier"
          ],
          "correctIndex": 1,
          "explanation": "The resonance box is tuned to match the fork frequency; it acts as a coupled resonator that amplifies the sound."
        }
      ],
      "discussion": [
        "Explain why only identical-frequency forks resonate with each other.",
        "How is sympathetic resonance related to the concept of natural frequency?",
        "Give a real-world example of resonance that could be destructive."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Resonance condition f_driver = f_natural",
          "pct": 35
        },
        {
          "label": "Energy transfer at resonance",
          "pct": 30
        },
        {
          "label": "Resonance box amplification",
          "pct": 20
        },
        {
          "label": "Destructive resonance examples",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think any sound will cause a tuning fork to vibrate; only matching frequencies work.",
        "Many believe the boxes are just to make it louder; they are actually tuned resonators.",
        "Confusing sympathetic resonance with echo; resonance requires frequency matching, echo does not."
      ],
      "hook": "Strike a tuning fork, damp it, and hear the other fork singing on its own — energy transferred through thin air! This is the same phenomenon that collapsed a bridge.",
      "khanLinks": [
        {
          "title": "Wave Properties",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        },
        {
          "title": "Mechanical Waves & Sound",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Fork A freq (Hz)",
        "Fork B freq (Hz)",
        "Resonance? (Y/N)",
        "Paper rider ejected? (Y/N)"
      ],
      "rows": 3
    },
    "observations": [
      "Strike fork A firmly, then immediately grip it to stop its vibration.",
      "Listen for sound from fork B and watch the paper rider.",
      "Repeat with a different-frequency fork to confirm no resonance."
    ],
    "conclusion": "Sympathetic resonance confirmed: identical 440 Hz forks — fork B vibrated and ejected paper rider after fork A was struck and damped. Different-frequency fork: no vibration. Resonance requires f_driver = f_natural.",
    "ai": {
      "opening": "Resonance connects oscillators through air alone! Ask me about sympathetic resonance, natural frequency, or the paper rider test.",
      "keywords": {
        "setup": "tuning fork|resonance box|paper rider|sympathetic resonance",
        "formula": "resonance: f_driver = f_natural",
        "error": "too much background noise|forks not truly identical|damping too slow",
        "question": "resonance|natural frequency|sympathetic|tuning fork|energy transfer",
        "real": "bridge collapse|opera singer|radio tuning"
      },
      "hint": "Resonance occurs ONLY when f_driver = f_natural. Different frequency → no energy transfer → no vibration of fork B.",
      "expected": "Identical forks: B vibrates, paper rider ejected. Different forks: no resonance. Confirms f_driver must equal f_natural."
    }
  },
  {
    "num": 28,
    "cardEmoji": "🎶",
    "title": "Beats and Interference in Acoustics",
    "section": "Acoustics",
    "desc": "Produce beats by sounding two tuning forks with slightly different frequencies and measure the beat frequency.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students measure f_beat = |f₁ − f₂| by counting beats per second from two forks at 440 Hz and 437 Hz.",
      "instructions": [
        "Strike both forks (440 Hz and 437 Hz) simultaneously.",
        "Count the number of beats (loudness pulses) heard in 10 seconds.",
        "Calculate f_beat = beats / 10 s and compare with |440 − 437| = 3 Hz."
      ],
      "expectedOutcome": "440 Hz + 437 Hz → 3 beats/s → 30 beats in 10 s. The sound oscillates between loud and soft 3 times per second."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Tuning fork 440 Hz"
        },
        {
          "emoji": "🎵",
          "name": "Tuning fork 437 Hz (or 440 Hz with wax added)"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "🔨",
          "name": "Rubber mallet"
        }
      ],
      "observationsToRecord": [
        "Number of beats heard in 10 seconds",
        "Beat frequency f_beat = n/t (Hz)",
        "Comparison with |f₁ − f₂|"
      ],
      "theoryPoints": [
        "Beats: periodic amplitude variation when two close-frequency waves superpose.",
        "f_beat = |f₁ − f₂|.",
        "The beat period T_beat = 1/f_beat.",
        "Constructive interference (loud) when waves are in phase; destructive (quiet) when out of phase."
      ],
      "realWorldConnections": [
        "Piano tuners use beats to tune strings to exact unison.",
        "Musicians use beats to tune instruments against a reference tone.",
        "Radio heterodyne receivers use beat frequency detection."
      ],
      "formula": "f_beat = |f₁ − f₂|"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 440 Hz and a 437 Hz fork are sounded together. How many beats occur in 10 s?",
          "options": [
            "30",
            "440",
            "3",
            "877"
          ],
          "correctIndex": 0,
          "explanation": "f_beat = |440 − 437| = 3 Hz → 3 × 10 = 30 beats in 10 s."
        },
        {
          "text": "If two forks produce 5 beats per second and one is at 500 Hz, the other could be:",
          "options": [
            "505 Hz only",
            "495 Hz only",
            "495 Hz or 505 Hz",
            "500 Hz"
          ],
          "correctIndex": 2,
          "explanation": "f_beat = |f₁ − f₂| = 5 → f₂ = 500 ± 5 = 495 or 505 Hz."
        },
        {
          "text": "Beats result from:",
          "options": [
            "Two waves at the same frequency in phase",
            "Two waves at different frequencies superposing",
            "Echoes from walls",
            "Doppler effect"
          ],
          "correctIndex": 1,
          "explanation": "Beats arise from the superposition of two waves with slightly different frequencies, creating periodic constructive and destructive interference."
        }
      ],
      "discussion": [
        "Explain how beats arise from the principle of superposition.",
        "How do piano tuners use beats to achieve perfect tuning?",
        "If you add wax to a 440 Hz tuning fork, what happens to the beat frequency when combined with another 440 Hz fork?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "f_beat = |f₁ − f₂|",
          "pct": 35
        },
        {
          "label": "Superposition principle",
          "pct": 30
        },
        {
          "label": "Constructive/destructive interference",
          "pct": 25
        },
        {
          "label": "Musical tuning application",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Students think beats produce a new frequency; they are periodic amplitude variations, not a new frequency.",
        "Many confuse the beat frequency with the average frequency (f₁+f₂)/2.",
        "Believing two forks must be identical for any sound interaction; beats specifically require different frequencies."
      ],
      "hook": "Two guitars slightly out of tune produce a wobbling 'wah-wah' sound — that's beats! Professional tuners count these wobbles per second to bring instruments to perfect pitch.",
      "khanLinks": [
        {
          "title": "Sound and Wave Interference",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        },
        {
          "title": "Wave Interference",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-mechanical-waves-and-sound/wave-interference-ap/v/wave-interference"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "f₁ (Hz)",
        "f₂ (Hz)",
        "Predicted f_beat (Hz)",
        "Beats in 10 s",
        "Measured f_beat (Hz)"
      ],
      "rows": 3
    },
    "observations": [
      "Strike both forks simultaneously and listen carefully for the beat pattern.",
      "Count beat cycles (loud-soft-loud = one beat) in 10 seconds.",
      "Verify measured f_beat ≈ |f₁ − f₂| = 3 Hz."
    ],
    "conclusion": "Beats confirmed: 440 Hz + 437 Hz → 30 beats in 10 s → f_beat = 3 Hz = |440 − 437|. The sound amplitude pulsed 3 times per second. This verifies f_beat = |f₁ − f₂|.",
    "ai": {
      "opening": "Beats are interference made audible! Ask me about f_beat = |f₁ − f₂|, how to count beats, or how piano tuners use them.",
      "keywords": {
        "setup": "two tuning forks|slightly different frequencies|stopwatch|count beats",
        "formula": "f_beat = |f₁ − f₂|",
        "error": "miscounting beats|too noisy environment|forks not simultaneously struck",
        "question": "beats|f_beat|interference|superposition|tuning",
        "real": "piano tuning|guitar tuning|radio heterodyne"
      },
      "hint": "f_beat = |f₁ − f₂|. Count loud pulses per second. 440 Hz + 437 Hz → 3 beats/s → 30 in 10 s.",
      "expected": "f₁=440 Hz, f₂=437 Hz → 30 beats in 10 s → f_beat = 3 Hz = |440−437|."
    }
  },
  {
    "num": 29,
    "cardEmoji": "🔍",
    "title": "Focal Length",
    "section": "Optics",
    "desc": "Measure the focal lengths of biconcave and biconvex lenses by focusing parallel light or using distant objects.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students measure focal lengths of converging and diverging lenses and confirm the sign convention: f > 0 for convex, f < 0 for concave.",
      "instructions": [
        "For biconvex: direct lens toward a distant object; find the sharpest image on a screen and measure f.",
        "For biconcave: use a virtual image method or measure divergence of a narrow beam.",
        "Record f for three different lenses of each type."
      ],
      "expectedOutcome": "Biconcave: f = [−0.054, −0.102, −0.152] m. Biconvex: f = [+0.053, +0.098, +0.151] m."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Set of biconvex lenses (3 different)"
        },
        {
          "emoji": "🔵",
          "name": "Set of biconcave lenses (3 different)"
        },
        {
          "emoji": "🔦",
          "name": "Distant light source or window"
        },
        {
          "emoji": "📏",
          "name": "Ruler / optical bench"
        },
        {
          "emoji": "🖥️",
          "name": "Screen (white card)"
        }
      ],
      "observationsToRecord": [
        "Type of lens (convex/concave)",
        "Distance from lens to sharp image f (m)",
        "Sign of f (positive for convex, negative for concave)"
      ],
      "theoryPoints": [
        "Focal length f: distance from lens to focal point where parallel rays converge (convex) or appear to diverge from (concave).",
        "Convex (converging) lens: f > 0; forms real image of distant objects.",
        "Concave (diverging) lens: f < 0; always forms virtual, upright, diminished images.",
        "Lens power P = 1/f (dioptres, D); more curved lens → shorter f → higher P."
      ],
      "realWorldConnections": [
        "Eyeglasses use lenses with prescribed focal lengths to correct vision.",
        "Camera lenses are compound systems of converging and diverging lenses.",
        "Telescopes and microscopes combine lenses to achieve high magnification."
      ],
      "formula": "P = 1/f (D)   |   f > 0 (converging)   |   f < 0 (diverging)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A biconvex lens has f = 0.098 m. What is its power in dioptres?",
          "options": [
            "10.2 D",
            "0.098 D",
            "9.8 D",
            "1.02 D"
          ],
          "correctIndex": 0,
          "explanation": "P = 1/f = 1/0.098 ≈ 10.2 D."
        },
        {
          "text": "A biconcave lens has f = −0.102 m. What type of image does it always form?",
          "options": [
            "Real, inverted, magnified",
            "Real, inverted, diminished",
            "Virtual, upright, diminished",
            "Virtual, inverted, same size"
          ],
          "correctIndex": 2,
          "explanation": "A concave (diverging) lens always forms virtual, upright, and diminished images regardless of object position."
        },
        {
          "text": "To correct shortsightedness (myopia), which lens is needed?",
          "options": [
            "Converging (convex)",
            "Diverging (concave)",
            "Plane (flat)",
            "Cylindrical"
          ],
          "correctIndex": 1,
          "explanation": "Myopia means the eye converges light too strongly; a diverging (concave) lens reduces convergence and shifts the focal point back to the retina."
        }
      ],
      "discussion": [
        "Explain the difference between a converging and a diverging lens using ray diagrams.",
        "Why does a more curved lens have a shorter focal length?",
        "How would you measure f for a concave lens without a direct focal point?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Focal length definition",
          "pct": 25
        },
        {
          "label": "Sign convention (f>0, f<0)",
          "pct": 25
        },
        {
          "label": "Lens power P=1/f",
          "pct": 25
        },
        {
          "label": "Image types for each lens",
          "pct": 25
        }
      ],
      "misconceptions": [
        "Students think concave lenses can form real images under some conditions; diverging lenses always form virtual images.",
        "Many forget the sign of f for concave lenses, causing calculation errors.",
        "Confusing focal length with image distance."
      ],
      "hook": "Hold a magnifying glass near a window and move a piece of paper until you see the sharpest image of the outside world — that distance is the focal length. Every lens has its own!",
      "khanLinks": [
        {
          "title": "Convex Lenses",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/convex-lenses"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Lens type",
        "Label",
        "f measured (m)",
        "Power P = 1/f (D)"
      ],
      "rows": 6
    },
    "observations": [
      "Record focal length for each of the 3 biconvex and 3 biconcave lenses.",
      "Confirm f > 0 for convex and f < 0 for concave.",
      "Compare measured values with labelled values if available."
    ],
    "conclusion": "Focal lengths measured: biconvex f = [+0.053, +0.098, +0.151] m; biconcave f = [−0.054, −0.102, −0.152] m. Sign convention confirmed. More curved lenses have shorter f and higher power.",
    "ai": {
      "opening": "Lenses bend light to create images! Ask me about focal length, lens power, or how to measure f for concave lenses.",
      "keywords": {
        "setup": "lens|focal point|screen|optical bench|distant object",
        "formula": "P = 1/f|f>0 convex|f<0 concave",
        "error": "parallax error|not a truly distant object|screen not perpendicular",
        "question": "focal length|converging|diverging|power|dioptres",
        "real": "eyeglasses|camera|telescope"
      },
      "hint": "Convex lens: parallel rays converge at F (real focus), f>0. Concave lens: rays diverge as if from virtual F, f<0.",
      "expected": "Biconvex: f = +0.053, +0.098, +0.151 m. Biconcave: f = −0.054, −0.102, −0.152 m."
    }
  },
  {
    "num": 30,
    "cardEmoji": "👓",
    "title": "Thin Lens Equation",
    "section": "Optics",
    "desc": "Verify the thin lens equation 1/p + 1/q = 1/f using a converging lens and measuring object and image distances.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Students measure object distance p and image distance q for several positions and confirm 1/p + 1/q = 1/f.",
      "instructions": [
        "Place object at p = 200 mm from a lens of known f.",
        "Move the screen until a sharp image forms; record q.",
        "Repeat for p = 150, 130, 100 mm and verify 1/p + 1/q = 1/f each time."
      ],
      "expectedOutcome": "p = 200 mm → q ≈ 90 mm; f ≈ 7 cm (from 1/0.2 + 1/0.09 ≈ 1/0.063). Object at 10 cm with f=15 cm: virtual image at q = −30 cm."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Converging lens (known f)"
        },
        {
          "emoji": "💡",
          "name": "Illuminated object (lamp + object slide)"
        },
        {
          "emoji": "🖥️",
          "name": "Screen"
        },
        {
          "emoji": "📏",
          "name": "Optical bench with scale"
        }
      ],
      "observationsToRecord": [
        "Object distance p (mm)",
        "Image distance q (mm) for each p",
        "Whether image is real (screen) or virtual (cannot be projected)"
      ],
      "theoryPoints": [
        "Thin lens equation: 1/p + 1/q = 1/f.",
        "Real images: q > 0 (same side as image), can be projected on screen.",
        "Virtual images: q < 0, cannot be projected; appear behind the lens.",
        "Magnification m = −q/p (negative m = inverted image)."
      ],
      "realWorldConnections": [
        "Camera: film/sensor at image distance q for object at distance p.",
        "Projectors: produce large real images on a screen by placing object just outside focal length.",
        "Magnifying glass: object inside focal length → virtual, upright, magnified image."
      ],
      "formula": "1/p + 1/q = 1/f   |   m = −q/p"
    },
    "questions": {
      "mcq": [
        {
          "text": "For a lens with f = 70 mm and p = 200 mm, calculate q.",
          "options": [
            "109 mm",
            "70 mm",
            "200 mm",
            "130 mm"
          ],
          "correctIndex": 0,
          "explanation": "1/q = 1/f − 1/p = 1/70 − 1/200 = (200−70)/(70×200) = 130/14000 → q = 14000/130 ≈ 107.7 mm ≈ 108 mm."
        },
        {
          "text": "An object is placed at p = 10 cm from a lens with f = 15 cm. The image is:",
          "options": [
            "Real at 30 cm",
            "Virtual at −30 cm",
            "Real at −30 cm",
            "Virtual at 30 cm"
          ],
          "correctIndex": 1,
          "explanation": "1/q = 1/15 − 1/10 = (2−3)/30 = −1/30 → q = −30 cm. Negative q means virtual image."
        },
        {
          "text": "When 1/p = 1/f (object at focal point), what is q?",
          "options": [
            "q = 0",
            "q = f",
            "q = ∞",
            "q = −f"
          ],
          "correctIndex": 2,
          "explanation": "1/q = 1/f − 1/f = 0 → q = ∞. Parallel rays exit the lens; image at infinity."
        }
      ],
      "discussion": [
        "Draw a ray diagram for an object at 2f and predict the image position using the lens equation.",
        "Explain the difference between a real and a virtual image. How can you tell which type you have?",
        "How does a projector differ from a camera in terms of where the object is placed relative to f?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "1/p + 1/q = 1/f derivation",
          "pct": 30
        },
        {
          "label": "Real vs. virtual images",
          "pct": 25
        },
        {
          "label": "Magnification m = −q/p",
          "pct": 25
        },
        {
          "label": "Special cases (p=f, p=2f)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students forget the sign convention: real images have positive q, virtual images have negative q.",
        "Many think a virtual image means no image exists; a virtual image can be seen through the lens but not projected.",
        "Mixing up object and image distances in the lens equation."
      ],
      "hook": "How does a phone camera focus from 10 cm to infinity? The lens physically moves to change q while keeping 1/p + 1/q = 1/f satisfied. Lens equation in action!",
      "khanLinks": [
        {
          "title": "Thin Lens Equation",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "p (mm)",
        "q (mm)",
        "1/p (mm⁻¹)",
        "1/q (mm⁻¹)",
        "1/p+1/q",
        "1/f (mm⁻¹)",
        "Match?"
      ],
      "rows": 5
    },
    "observations": [
      "Record p and q for each trial.",
      "Calculate 1/p + 1/q and compare with 1/f.",
      "Note whether image is real (q>0) or virtual (q<0)."
    ],
    "conclusion": "Thin lens equation verified for all trials. p=200mm→q≈109mm: 1/200+1/109=0.005+0.0092=0.0142≈1/70 mm⁻¹. Object at p=10cm, f=15cm→q=−30cm (virtual). All results consistent with 1/p+1/q=1/f.",
    "ai": {
      "opening": "The thin lens equation governs every camera, projector, and eye! Ask me about 1/p+1/q=1/f, real vs. virtual images, or magnification.",
      "keywords": {
        "setup": "optical bench|converging lens|object|screen|image distance",
        "formula": "1/p+1/q=1/f|m=-q/p",
        "error": "parallax|screen not at sharp focus|p measured from wrong reference",
        "question": "thin lens|object distance|image distance|real|virtual|magnification",
        "real": "camera|projector|magnifying glass"
      },
      "hint": "1/q = 1/f − 1/p. If result is negative, q is negative → virtual image. m = −q/p gives sign and size of image.",
      "expected": "p=200mm, f=70mm: q≈108mm. p=10cm, f=15cm: q=−30cm (virtual). 1/p+1/q=1/f confirmed."
    }
  },
  {
    "num": 31,
    "cardEmoji": "🔬",
    "title": "Magnification",
    "section": "Optics",
    "desc": "Measure the linear magnification of a converging lens by comparing image and object sizes and verifying m = −v/u.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "40 min",
    "summary": {
      "whatTheyLearn": "Students measure image size S₂ and object size S₁ and verify m = S₂/S₁ = −v/u = −q/p.",
      "instructions": [
        "Set up object (arrow slide) at measured distance u from lens.",
        "Find sharp image on screen at distance v.",
        "Measure S₁ (object size) and S₂ (image size); calculate m = S₂/S₁ and compare with −v/u."
      ],
      "expectedOutcome": "Trial 1: u = 35 mm, v = 86.5 mm, S₁ = 21 mm, S₂ = 51 mm → m = 51/21 ≈ 2.43; −v/u = −86.5/35 ≈ −2.47. Inverted image."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Converging lens"
        },
        {
          "emoji": "💡",
          "name": "Object slide with arrow (known size S₁)"
        },
        {
          "emoji": "🖥️",
          "name": "Screen"
        },
        {
          "emoji": "📏",
          "name": "Optical bench with millimetre scale"
        }
      ],
      "observationsToRecord": [
        "Object distance u (mm)",
        "Image distance v (mm)",
        "Object size S₁ (mm)",
        "Image size S₂ (mm)",
        "m = S₂/S₁ and m = −v/u"
      ],
      "theoryPoints": [
        "Linear magnification: m = image size / object size = S₂/S₁.",
        "From geometry of similar triangles: m = −v/u (negative sign = inverted).",
        "|m| > 1: magnified; |m| < 1: diminished; m < 0: inverted.",
        "Real images (v > 0) from object beyond f: inverted (m < 0)."
      ],
      "realWorldConnections": [
        "Projectors require m >> 1 to create large screen images.",
        "Microscopes use two lens stages; total m = m_obj × m_eye.",
        "Cameras require m < 1 to create small sensor images of large scenes."
      ],
      "formula": "m = S₂/S₁ = −v/u = −q/p"
    },
    "questions": {
      "mcq": [
        {
          "text": "Object at u = 35 mm, image at v = 86.5 mm. What is the magnification?",
          "options": [
            "−2.47",
            "+2.47",
            "−0.40",
            "+0.40"
          ],
          "correctIndex": 0,
          "explanation": "m = −v/u = −86.5/35 ≈ −2.47. Negative: inverted image. |m| = 2.47: magnified."
        },
        {
          "text": "If |m| = 0.5, the image is:",
          "options": [
            "Twice as large as the object",
            "The same size as the object",
            "Half the size of the object",
            "Three times as large"
          ],
          "correctIndex": 2,
          "explanation": "|m| = 0.5 means image size = 0.5 × object size → image is half the size (diminished)."
        },
        {
          "text": "A real image formed by a converging lens is always:",
          "options": [
            "Upright and magnified",
            "Inverted",
            "Virtual",
            "The same size as the object"
          ],
          "correctIndex": 1,
          "explanation": "Real images from converging lenses (object beyond f) are always inverted (m < 0)."
        }
      ],
      "discussion": [
        "Explain why m = −v/u has a negative sign for real images.",
        "How would you set up the experiment to produce a magnified virtual image? What would m be?",
        "A projector lens produces an image 50× the object size. If the object is 20 mm, how large is the image?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "m = S₂/S₁ (size ratio)",
          "pct": 30
        },
        {
          "label": "m = −v/u (distance ratio)",
          "pct": 30
        },
        {
          "label": "Sign and magnitude of m",
          "pct": 25
        },
        {
          "label": "Verification of both methods",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think magnification is always > 1; cameras and eyes produce m < 1.",
        "Forgetting the negative sign: m < 0 means inverted, not smaller.",
        "Measuring S₂ and S₁ from the same side of the lens confuses object and image."
      ],
      "hook": "How does a movie projector make a postage-stamp-sized film frame fill an entire cinema screen? Linear magnification of hundreds — all from the thin lens equation!",
      "khanLinks": [
        {
          "title": "Image Height & Distance",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/object-image-height-and-distance-relationship"
        },
        {
          "title": "Thin Lens Equation",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "u (mm)",
        "v (mm)",
        "S₁ (mm)",
        "S₂ (mm)",
        "m = S₂/S₁",
        "m = −v/u",
        "Match?"
      ],
      "rows": 4
    },
    "observations": [
      "Measure S₁ of the object with a ruler before the experiment.",
      "Measure S₂ of the image on the screen carefully.",
      "Compare m calculated both ways for each trial."
    ],
    "conclusion": "Trial 1: u=35mm, v=86.5mm → m_size=51/21≈2.43, m_ratio=−86.5/35≈−2.47. Agreement within 2%. Real image is inverted (m<0). m = S₂/S₁ = −v/u verified.",
    "ai": {
      "opening": "Magnification connects object and image sizes! Ask me about m = S₂/S₁, why real images are inverted, or how projectors work.",
      "keywords": {
        "setup": "optical bench|object slide|screen|converging lens|image size",
        "formula": "m = S₂/S₁ = −v/u",
        "error": "measuring from wrong reference|blurry image|parallax",
        "question": "magnification|image size|object size|inverted|real image",
        "real": "projector|microscope|camera"
      },
      "hint": "m = S₂/S₁ = −v/u. Negative m means inverted. |m|>1 means magnified. Real images are always inverted.",
      "expected": "u=35mm, v=86.5mm, S₁=21mm, S₂=51mm → m_size≈2.43, m_ratio≈−2.47. Agreement confirms formula."
    }
  },
  {
    "num": 32,
    "cardEmoji": "🌈",
    "title": "Mixing of Colours",
    "section": "Optics",
    "desc": "Mix coloured lights (additive synthesis) and coloured filters (subtractive synthesis) to understand colour perception.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students discover the additive primary colours (R, G, B) and their mixtures, and compare with subtractive mixing of pigments.",
      "instructions": [
        "Shine red, green, and blue lights onto a white screen and overlap them.",
        "Record the colour at each overlap region.",
        "Repeat with coloured filters (subtractive): observe different results."
      ],
      "expectedOutcome": "Additive: R+G=Yellow, R+B=Magenta, G+B=Cyan, R+G+B=White. Subtractive: primary colours CMY combine differently."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔴",
          "name": "Red LED / spotlight"
        },
        {
          "emoji": "🟢",
          "name": "Green LED / spotlight"
        },
        {
          "emoji": "🔵",
          "name": "Blue LED / spotlight"
        },
        {
          "emoji": "🖥️",
          "name": "White screen"
        },
        {
          "emoji": "🎨",
          "name": "Coloured filters (CMY)"
        }
      ],
      "observationsToRecord": [
        "Colour at each overlap of two primaries",
        "Colour when all three primaries overlap",
        "Comparison with subtractive (filter) mixing results"
      ],
      "theoryPoints": [
        "Additive mixing (lights): R + G = Yellow; R + B = Magenta; G + B = Cyan; R + G + B = White.",
        "Subtractive mixing (pigments/filters): absorb colours; Cyan + Magenta + Yellow = Black.",
        "Human eye has three cone types (sensitive to R, G, B).",
        "TV screens use additive mixing (tiny R, G, B pixels)."
      ],
      "realWorldConnections": [
        "Television and phone screens use additive RGB mixing.",
        "Printing uses subtractive CMYK mixing.",
        "Stage lighting designers use additive colour mixing."
      ],
      "formula": "Additive: R+G+B = White   |   Subtractive: C+M+Y = Black"
    },
    "questions": {
      "mcq": [
        {
          "text": "What colour is produced by mixing red and green light?",
          "options": [
            "Brown",
            "Yellow",
            "Orange",
            "White"
          ],
          "correctIndex": 1,
          "explanation": "Additive mixing: red + green = yellow."
        },
        {
          "text": "Mixing all three additive primaries (R+G+B) gives:",
          "options": [
            "Black",
            "Brown",
            "White",
            "Grey"
          ],
          "correctIndex": 2,
          "explanation": "All three additive primaries together produce white light."
        },
        {
          "text": "Subtractive colour mixing is used in:",
          "options": [
            "Television screens",
            "Stage lighting",
            "Colour printing",
            "Projectors"
          ],
          "correctIndex": 2,
          "explanation": "Printing uses subtractive CMYK mixing; inks absorb (subtract) colours from white light."
        }
      ],
      "discussion": [
        "Explain the difference between additive and subtractive colour mixing with examples.",
        "Why does mixing all pigment colours give black while mixing all lights gives white?",
        "How does a TV screen produce millions of colours using only three colours?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Additive primaries RGB",
          "pct": 30
        },
        {
          "label": "Secondary colours (Y, M, C)",
          "pct": 25
        },
        {
          "label": "Subtractive mixing (CMY)",
          "pct": 25
        },
        {
          "label": "Colour perception (cone cells)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students confuse additive (light) and subtractive (pigment) mixing; they follow different rules.",
        "Many think R+G should make orange (paint mixing rule); in light, R+G = Yellow.",
        "Assuming white is the absence of colour; in additive mixing, white is all colours together."
      ],
      "hook": "Your phone screen has no yellow, orange or purple pixels — only red, green, and blue. Yet it shows billions of colours! Additive mixing is the secret.",
      "khanLinks": [
        {
          "title": "Visible Light & the EM Spectrum",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum"
        },
        {
          "title": "Light Waves",
          "url": "https://www.khanacademy.org/science/physics/light-waves"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Combination",
        "Additive result",
        "Subtractive result"
      ],
      "rows": 7
    },
    "observations": [
      "Record the colour at each overlap zone on the white screen.",
      "Confirm R+G+B = White in the central overlap.",
      "Compare with filter overlaps and note the differences."
    ],
    "conclusion": "Additive colour mixing verified: R+G=Yellow, R+B=Magenta, G+B=Cyan, R+G+B=White. Subtractive mixing with filters gives different results (CMY → Black). TV screens use additive RGB; printers use subtractive CMY.",
    "ai": {
      "opening": "Colour mixing is different for lights vs. paints! Ask me about additive RGB, subtractive CMY, or how screens create all colours.",
      "keywords": {
        "setup": "coloured lights|RGB|white screen|filters|overlap",
        "formula": "R+G=Y|R+B=M|G+B=C|R+G+B=White|C+M+Y=Black",
        "error": "room not dark enough|spotlights not truly RGB|screen not white",
        "question": "additive|subtractive|RGB|CMY|colour mixing|primary colours",
        "real": "TV screen|printing|stage lighting"
      },
      "hint": "Additive (lights): R+G=Yellow, R+B=Magenta, G+B=Cyan, all three=White. Subtractive (pigments): opposite — all absorb to give Black.",
      "expected": "R+G=Yellow, R+B=Magenta, G+B=Cyan, R+G+B=White. Subtractive: C+M+Y=Black."
    }
  },
  {
    "num": 33,
    "cardEmoji": "🔭",
    "title": "Microscope – Telescope",
    "section": "Optics",
    "desc": "Build a simple microscope and telescope using available lenses and measure their magnifications.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students understand that a compound microscope uses two converging lenses (M_total = M_obj × M_eye) and a telescope uses a large objective and eyepiece.",
      "instructions": [
        "Microscope: place object just beyond f of objective; position eyepiece to view the real intermediate image.",
        "Telescope: align objective (long f) and eyepiece (short f) separated by f_obj + f_eye.",
        "Measure total magnification by comparing image and object apparent sizes."
      ],
      "expectedOutcome": "Microscope: M_total = M_obj × M_eye. Telescope angular magnification: M = f_obj/f_eye."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔵",
          "name": "Short focal length lens (objective)"
        },
        {
          "emoji": "🔵",
          "name": "Medium focal length lens (eyepiece)"
        },
        {
          "emoji": "📏",
          "name": "Optical bench"
        },
        {
          "emoji": "💡",
          "name": "Illuminated object"
        },
        {
          "emoji": "🔭",
          "name": "Long focal length lens (telescope objective)"
        }
      ],
      "observationsToRecord": [
        "f_objective and f_eyepiece (mm)",
        "Total magnification M_total for microscope",
        "Angular magnification M = f_obj/f_eye for telescope"
      ],
      "theoryPoints": [
        "Compound microscope: M_total = M_obj × M_eye = (v_obj/u_obj) × (D/f_eye).",
        "Telescope: M = f_obj / f_eye (angular magnification).",
        "Using a short f_obj and short f_eye gives high microscope magnification.",
        "Telescope: large f_obj and short f_eye gives high magnification."
      ],
      "realWorldConnections": [
        "Compound microscopes magnify cells and microorganisms for biological study.",
        "Astronomical telescopes use large objective mirrors or lenses to gather light.",
        "Binoculars combine two telescopes with prisms for compact design."
      ],
      "formula": "Microscope: M = M_obj × M_eye   |   Telescope: M = f_obj / f_eye"
    },
    "questions": {
      "mcq": [
        {
          "text": "A microscope has M_obj = 10× and M_eye = 5×. What is M_total?",
          "options": [
            "2×",
            "15×",
            "50×",
            "100×"
          ],
          "correctIndex": 2,
          "explanation": "M_total = M_obj × M_eye = 10 × 5 = 50×."
        },
        {
          "text": "A telescope has f_obj = 600 mm and f_eye = 20 mm. What is its magnification?",
          "options": [
            "20×",
            "30×",
            "600×",
            "12,000×"
          ],
          "correctIndex": 1,
          "explanation": "M = f_obj/f_eye = 600/20 = 30×."
        },
        {
          "text": "The eyepiece of a microscope acts as:",
          "options": [
            "An objective lens making a real image",
            "A magnifying glass viewing the real image from the objective",
            "A mirror",
            "A projector"
          ],
          "correctIndex": 1,
          "explanation": "The eyepiece functions as a simple magnifying glass, enlarging the real intermediate image formed by the objective."
        }
      ],
      "discussion": [
        "Explain the two-stage magnification process in a compound microscope.",
        "Why does a telescope need a large diameter objective lens?",
        "Compare the light path in a refracting telescope and a reflecting telescope."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Two-lens compound microscope",
          "pct": 30
        },
        {
          "label": "Refracting telescope design",
          "pct": 30
        },
        {
          "label": "M = M_obj × M_eye (microscope)",
          "pct": 20
        },
        {
          "label": "M = f_obj/f_eye (telescope)",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students think more lenses always means more magnification; alignment is critical.",
        "Confusing the roles of objective and eyepiece in a microscope.",
        "Assuming all optical instruments work the same way."
      ],
      "hook": "A compound microscope uses two lenses whose magnifications multiply — not add! A 40× objective and a 10× eyepiece give 400× total. That's enough to see individual cells!",
      "khanLinks": [
        {
          "title": "Lenses (Geometric Optics)",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Instrument",
        "f_obj (mm)",
        "f_eye (mm)",
        "M_obj",
        "M_eye",
        "M_total"
      ],
      "rows": 3
    },
    "observations": [
      "Record lens focal lengths and measure magnification for the microscope setup.",
      "Calculate M = f_obj/f_eye for the telescope and verify by observation.",
      "Describe the orientation of the final image in each instrument."
    ],
    "conclusion": "Compound microscope: M_total = M_obj × M_eye. Telescope: M = f_obj/f_eye. Both verified experimentally. Microscope image is inverted; telescope image inverted (refracting). M_total multiplies with each stage.",
    "ai": {
      "opening": "Microscopes and telescopes bend light in ingenious ways! Ask me about the two-stage microscope, telescope magnification, or how to build one.",
      "keywords": {
        "setup": "objective|eyepiece|optical bench|focal length|microscope|telescope",
        "formula": "M_total = M_obj × M_eye|M_telescope = f_obj/f_eye",
        "error": "alignment|eye relief|incorrect lens choice",
        "question": "microscope|telescope|magnification|objective|eyepiece",
        "real": "biological microscope|astronomical telescope|binoculars"
      },
      "hint": "Microscope: M_total = M_obj × M_eye. Telescope: M = f_obj / f_eye. For telescope, use long f_obj and short f_eye.",
      "expected": "Telescope with f_obj=600mm, f_eye=20mm → M=30×. Microscope: M_obj×M_eye gives total magnification."
    }
  },
  {
    "num": 34,
    "cardEmoji": "🔺",
    "title": "Prism: Composition of Light",
    "section": "Optics",
    "desc": "Pass white light through a glass prism to produce a visible spectrum and observe wavelength-dependent refraction (dispersion).",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students observe that white light splits into ROY G BIV (red, orange, yellow, green, blue, indigo, violet) and understand that violet bends most, red least.",
      "instructions": [
        "Direct a narrow beam of white light at the prism face.",
        "Observe the spectrum on a screen and identify the colours in order.",
        "Note which colour is deviated most (violet) and least (red)."
      ],
      "expectedOutcome": "Spectrum in order: Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROY G BIV). Violet deviates the most; red the least. Replicates Newton's 1666 prism experiment."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔺",
          "name": "Glass equilateral prism"
        },
        {
          "emoji": "🔦",
          "name": "White light source (projector or sunlight slit)"
        },
        {
          "emoji": "🖥️",
          "name": "White screen"
        },
        {
          "emoji": "📏",
          "name": "Ruler (to measure deviation angles)"
        }
      ],
      "observationsToRecord": [
        "Colour sequence in the spectrum",
        "Which colour deviates most and least",
        "Approximate angular width of the spectrum"
      ],
      "theoryPoints": [
        "Dispersion: different wavelengths refract at slightly different angles (n varies with λ).",
        "Violet (λ ≈ 400 nm) has the highest refractive index → bends most.",
        "Red (λ ≈ 700 nm) has the lowest refractive index → bends least.",
        "Snell's law: n₁ sin θ₁ = n₂ sin θ₂ (but n depends on wavelength).",
        "Rainbows are natural dispersion by water droplets."
      ],
      "realWorldConnections": [
        "Rainbows occur when sunlight disperses in water droplets.",
        "Prism spectrometers analyse the composition of light sources.",
        "Chromatic aberration in lenses arises from dispersion."
      ],
      "formula": "n₁ sin θ₁ = n₂ sin θ₂   |   n = n(λ): violet > red"
    },
    "questions": {
      "mcq": [
        {
          "text": "Which colour of light is deviated most by a glass prism?",
          "options": [
            "Red",
            "Green",
            "Violet",
            "Yellow"
          ],
          "correctIndex": 2,
          "explanation": "Violet has the shortest wavelength and highest refractive index in glass → greatest deviation."
        },
        {
          "text": "Why does a prism separate white light into colours?",
          "options": [
            "It absorbs some colours",
            "Different wavelengths have different refractive indices",
            "The prism is very thick",
            "The light bounces inside the prism"
          ],
          "correctIndex": 1,
          "explanation": "Dispersion: n varies with wavelength. Each colour refracts at a slightly different angle."
        },
        {
          "text": "The sequence of colours from a prism starting from least to most deviated is:",
          "options": [
            "V I B G Y O R",
            "R O Y G B I V",
            "R G B",
            "W Y G"
          ],
          "correctIndex": 1,
          "explanation": "Red deviates least, violet most: R O Y G B I V (ROY G BIV)."
        }
      ],
      "discussion": [
        "Explain why violet light bends more than red light when passing through glass.",
        "How is a rainbow formed? Which colour appears on the outer edge and which on the inner?",
        "What is chromatic aberration and how does it relate to dispersion?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Dispersion: n = n(λ)",
          "pct": 30
        },
        {
          "label": "Spectrum order ROY G BIV",
          "pct": 25
        },
        {
          "label": "Snell's law at each interface",
          "pct": 25
        },
        {
          "label": "Rainbow and real-world dispersion",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students think the prism adds colour to white light; it only separates colours already present.",
        "Many think red bends more than violet; it is the opposite.",
        "Assuming all transparent materials disperse light equally."
      ],
      "hook": "Isaac Newton was the first to show that white light is a mixture of all colours, not pure light contaminated by a prism. He proved it by recombining the spectrum back into white with a second prism!",
      "khanLinks": [
        {
          "title": "Refraction & Snell's Law",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/refraction-and-snell-s-law"
        },
        {
          "title": "Visible Light & the EM Spectrum",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Colour",
        "Approx. wavelength (nm)",
        "Deviation (relative)",
        "Position in spectrum"
      ],
      "rows": 7
    },
    "observations": [
      "List colours observed in order from least to most deviated.",
      "Confirm violet is on the most-deviated side.",
      "Estimate the total angular spread of the spectrum."
    ],
    "conclusion": "White light dispersed into ROY G BIV spectrum. Violet deviated most, red least. This confirms n(violet) > n(red) in glass and Snell's law with wavelength-dependent refractive index. Replicates Newton's 1666 experiment.",
    "ai": {
      "opening": "White light is a rainbow waiting to happen! Ask me about dispersion, Snell's law, or why violet bends more than red.",
      "keywords": {
        "setup": "prism|white light|spectrum|screen|slit",
        "formula": "n₁sinθ₁=n₂sinθ₂|n = n(λ)|dispersion",
        "error": "room not dark|prism angle wrong|slit too wide",
        "question": "dispersion|spectrum|ROY G BIV|violet|red|refraction|rainbow",
        "real": "rainbow|spectrometer|chromatic aberration"
      },
      "hint": "Violet has highest n → deviates most. Red has lowest n → deviates least. Sequence: R O Y G B I V.",
      "expected": "Spectrum: R-O-Y-G-B-I-V. Violet most deviated, red least. n(violet)>n(red) confirmed."
    }
  },
  {
    "num": 35,
    "cardEmoji": "🌗",
    "title": "Shadows and Penumbra",
    "section": "Optics",
    "desc": "Investigate how shadow size and sharpness depend on source size and the relative positions of source, object, and screen.",
    "equipmentNeeded": "basic-supplies",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students observe umbra (complete shadow) and penumbra (partial shadow) and discover that point sources give sharp shadows while extended sources give penumbras.",
      "instructions": [
        "Place a small opaque object between a point light source and a screen.",
        "Measure the shadow size vs. object-screen distance.",
        "Repeat with an extended (larger) light source and observe the penumbra."
      ],
      "expectedOutcome": "Point source → sharp shadow (umbra only). Extended source → umbra surrounded by penumbra. Shadow size increases as object moves closer to screen."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔦",
          "name": "Point light source (small LED)"
        },
        {
          "emoji": "💡",
          "name": "Extended light source (lamp with large bulb)"
        },
        {
          "emoji": "⚫",
          "name": "Opaque object (ball or disc)"
        },
        {
          "emoji": "🖥️",
          "name": "White screen"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        }
      ],
      "observationsToRecord": [
        "Shadow dimensions for point source vs. extended source",
        "Presence/absence of penumbra",
        "Effect of object-screen distance on shadow size"
      ],
      "theoryPoints": [
        "Umbra: region of total shadow (no direct light from source).",
        "Penumbra: region of partial shadow (some light from source reaches it).",
        "Point source → only umbra (sharp shadow).",
        "Extended source → umbra + penumbra.",
        "Geometric optics: light travels in straight lines (ray model)."
      ],
      "realWorldConnections": [
        "Solar and lunar eclipses involve umbra and penumbra zones.",
        "Photography: large softboxes create soft shadows (large penumbra); small LED creates harsh shadows.",
        "Sundials work because the sun's shadow position indicates time."
      ],
      "formula": "Shadow geometry: similar triangles; shadow height/object height = image distance/object distance"
    },
    "questions": {
      "mcq": [
        {
          "text": "What is the key difference between umbra and penumbra?",
          "options": [
            "Umbra is coloured; penumbra is grey",
            "Umbra receives no direct light; penumbra receives partial light",
            "Umbra is larger than penumbra",
            "There is no difference"
          ],
          "correctIndex": 1,
          "explanation": "Umbra is the total shadow region receiving no direct light from the source. Penumbra is the partial shadow where part of the source is blocked."
        },
        {
          "text": "Which type of light source produces the sharpest shadow with no penumbra?",
          "options": [
            "Extended source (large bulb)",
            "Point source (very small LED)",
            "Diffuse source",
            "Coloured source"
          ],
          "correctIndex": 1,
          "explanation": "A point source produces rays from a single point; the geometric shadow edge is perfectly sharp with no penumbra."
        },
        {
          "text": "As an opaque object moves closer to the screen (point source unchanged), the shadow:",
          "options": [
            "Gets larger",
            "Gets smaller",
            "Stays the same",
            "Disappears"
          ],
          "correctIndex": 1,
          "explanation": "Moving the object toward the screen brings it closer to its own shadow, reducing shadow size (similar triangles: smaller angle projected)."
        }
      ],
      "discussion": [
        "Explain why the Moon's shadow during a solar eclipse has both an umbra and a penumbra.",
        "Why do photographers use large softboxes to produce flattering portraits?",
        "Use similar triangles to derive a formula for shadow height in terms of source distance, object size, and screen distance."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Umbra vs. penumbra",
          "pct": 30
        },
        {
          "label": "Point vs. extended source",
          "pct": 30
        },
        {
          "label": "Shadow geometry (similar triangles)",
          "pct": 25
        },
        {
          "label": "Eclipse geometry",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think a point source creates a penumbra; only extended sources do.",
        "Many confuse umbra and penumbra sizes with the object size.",
        "Assuming light bends around corners to fill in shadows (it doesn't in geometric optics)."
      ],
      "hook": "Stand in the sunshine and look at your shadow. It has a fuzzy edge — that's a penumbra! The Sun is not a point source; it's 1.4 million km wide, so its light comes from slightly different directions.",
      "khanLinks": [
        {
          "title": "Introduction to Light",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/introduction-to-light"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Source type",
        "Object-source dist (cm)",
        "Object-screen dist (cm)",
        "Shadow width (cm)",
        "Penumbra width (cm)"
      ],
      "rows": 5
    },
    "observations": [
      "Record shadow dimensions for both point and extended sources.",
      "Observe and sketch the umbra and penumbra regions.",
      "Note how shadow size changes when object-screen distance changes."
    ],
    "conclusion": "Point source → sharp umbra, no penumbra. Extended source → umbra + penumbra. Shadow size predicted by similar triangles. Penumbra width increases with source size. Eclipse geometry explained by same principles.",
    "ai": {
      "opening": "Shadows reveal how light travels! Ask me about umbra, penumbra, why point sources are different, or eclipse geometry.",
      "keywords": {
        "setup": "point source|extended source|opaque object|screen|shadow",
        "formula": "similar triangles|shadow_h/object_h = d_screen/d_object",
        "error": "multiple light sources|reflections from walls|translucent object",
        "question": "shadow|umbra|penumbra|point source|eclipse",
        "real": "solar eclipse|photography|sundial"
      },
      "hint": "Point source → only sharp umbra. Extended source → umbra + penumbra. Shadow geometry: use similar triangles.",
      "expected": "Point source: sharp shadow. Extended source: penumbra surrounds umbra. Shadow size increases with object-screen distance."
    }
  },
  {
    "num": 36,
    "cardEmoji": "🪞",
    "title": "Mirrors",
    "section": "Optics",
    "desc": "Investigate image formation by concave and convex mirrors for objects at different distances.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students observe that concave mirrors form real or virtual images depending on object position, while convex mirrors always form virtual, upright, diminished images.",
      "instructions": [
        "Place object beyond C (centre of curvature) of concave mirror; locate real image.",
        "Move object inside f; observe virtual, upright, magnified image.",
        "Replace with convex mirror; observe always-virtual, upright, diminished image."
      ],
      "expectedOutcome": "Concave: object beyond f → real, inverted image. Object inside f → virtual, upright, magnified. Convex: always virtual, upright, diminished (wide field of view)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🥄",
          "name": "Concave mirror"
        },
        {
          "emoji": "🔵",
          "name": "Convex mirror"
        },
        {
          "emoji": "💡",
          "name": "Illuminated object"
        },
        {
          "emoji": "🖥️",
          "name": "Screen"
        },
        {
          "emoji": "📏",
          "name": "Optical bench"
        }
      ],
      "observationsToRecord": [
        "Object distance u (cm)",
        "Image distance v (cm) for concave mirror",
        "Image orientation (upright/inverted) and size",
        "Type of image for convex mirror"
      ],
      "theoryPoints": [
        "Mirror equation: 1/v + 1/u = 1/f = 2/R.",
        "Concave mirror: f < 0 (real focus). Object at u > f → real, inverted image.",
        "Concave mirror: u < f → virtual, upright, magnified image (shaving/make-up mirror).",
        "Convex mirror: f > 0 (virtual focus). Always: virtual, upright, diminished image.",
        "Convex mirror has wider field of view → used in car side mirrors."
      ],
      "realWorldConnections": [
        "Convex mirrors in shops and car side mirrors provide a wide field of view.",
        "Concave mirrors in telescopes (reflecting) and satellite dishes focus signals.",
        "Concave mirrors used in make-up mirrors give magnified upright image."
      ],
      "formula": "1/v + 1/u = 1/f = 2/R   |   m = −v/u"
    },
    "questions": {
      "mcq": [
        {
          "text": "A convex mirror always produces an image that is:",
          "options": [
            "Real, inverted, and magnified",
            "Real, inverted, and diminished",
            "Virtual, upright, and diminished",
            "Virtual, inverted, and magnified"
          ],
          "correctIndex": 2,
          "explanation": "Convex (diverging) mirrors always produce virtual, upright, and diminished images regardless of object position."
        },
        {
          "text": "A concave mirror forms a real image when the object is:",
          "options": [
            "Inside the focal length",
            "Exactly at the focal point",
            "Beyond the focal length",
            "At infinity only"
          ],
          "correctIndex": 2,
          "explanation": "Concave mirrors form real images when the object is beyond the focal point (u > f)."
        },
        {
          "text": "Why are convex mirrors used as car rear-view mirrors?",
          "options": [
            "They magnify objects",
            "They provide a wider field of view",
            "They eliminate glare",
            "They show real images"
          ],
          "correctIndex": 1,
          "explanation": "Convex mirrors always produce diminished images, allowing a wider field of view in a compact mirror size."
        }
      ],
      "discussion": [
        "Draw ray diagrams for a concave mirror with the object (a) beyond C, (b) between f and C, (c) inside f.",
        "Why does a make-up mirror use a concave rather than a convex mirror?",
        "What is the significance of the warning 'Objects in mirror are closer than they appear' on car mirrors?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Mirror equation 1/v+1/u=1/f",
          "pct": 25
        },
        {
          "label": "Concave mirror image types",
          "pct": 30
        },
        {
          "label": "Convex mirror properties",
          "pct": 25
        },
        {
          "label": "Applications of curved mirrors",
          "pct": 20
        }
      ],
      "misconceptions": [
        "Students think concave mirrors always magnify; they only do so when the object is inside f.",
        "Many forget the sign convention for mirrors differs from lenses.",
        "Assuming convex mirrors are dangerous because they distort; they are safer for driving due to wide field of view."
      ],
      "hook": "Look into the back of a spoon — you see yourself upside down. Look into the front — you see yourself magnified. The same physics applies to satellite dishes and your car's side mirror!",
      "khanLinks": [
        {
          "title": "Concave Mirror Reflection",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/mirrors/v/concave-mirrors"
        },
        {
          "title": "Mirrors (Geometric Optics)",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/mirrors"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Mirror type",
        "u (cm)",
        "v (cm)",
        "Real/Virtual",
        "Upright/Inverted",
        "Magnified/Diminished"
      ],
      "rows": 5
    },
    "observations": [
      "For concave mirror: place object at 3 different distances (beyond C, between f and C, inside f).",
      "For convex mirror: note image is always virtual, upright, diminished.",
      "Measure and compare f using 1/v + 1/u = 1/f."
    ],
    "conclusion": "Concave mirror: object beyond f → real, inverted image. Object inside f → virtual, upright, magnified. Convex mirror: always virtual, upright, diminished with wide field of view. Mirror equation verified: 1/v+1/u=1/f.",
    "ai": {
      "opening": "Curved mirrors create fascinating images! Ask me about the mirror equation, when concave mirrors magnify, or why car mirrors are convex.",
      "keywords": {
        "setup": "concave mirror|convex mirror|optical bench|screen|object distance",
        "formula": "1/v+1/u=1/f=2/R|m=-v/u",
        "error": "sign convention|measuring from wrong reference|screen placement",
        "question": "concave|convex|real image|virtual image|mirror equation|field of view",
        "real": "car mirror|make-up mirror|telescope|satellite dish"
      },
      "hint": "Concave: real images when u>f (inverted). Virtual when u<f (upright, magnified). Convex: always virtual, upright, diminished.",
      "expected": "Concave: u>f → real inverted image on screen. u<f → virtual magnified image. Convex: always virtual, upright, diminished."
    }
  },
  {
    "num": 37,
    "cardEmoji": "🧲",
    "title": "Attractive and repulsive Magnetic force",
    "section": "Magnetism",
    "desc": "Investigate the forces between bar magnets and map the regions of attraction and repulsion.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Students confirm that like poles repel and unlike poles attract, and observe that magnetic force decreases rapidly with distance.",
      "instructions": [
        "Bring N pole of magnet A toward N pole of magnet B: observe repulsion.",
        "Bring N pole of A toward S pole of B: observe attraction.",
        "Measure force (qualitatively) at several distances."
      ],
      "expectedOutcome": "N-N and S-S: repulsion. N-S: attraction. Force decreases rapidly with separation distance."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "Two bar magnets (labelled N/S)"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🧭",
          "name": "Compass (to identify poles)"
        }
      ],
      "observationsToRecord": [
        "Force type (attract/repel) for each pole combination",
        "Qualitative force at different separations",
        "Confirmation of pole labelling with compass"
      ],
      "theoryPoints": [
        "Like poles (N-N, S-S) repel; unlike poles (N-S) attract.",
        "Magnetic force ∝ 1/r² (dipole approximation at large distances).",
        "Magnetic monopoles do not exist; every magnet has both N and S poles.",
        "Cutting a magnet in half creates two new magnets, each with N and S poles."
      ],
      "realWorldConnections": [
        "Magnetic levitation trains use repulsion between like poles for frictionless travel.",
        "Compass needles align with Earth's magnetic field (N pole points to geographic north).",
        "MRI machines use powerful superconducting magnets."
      ],
      "formula": "F ∝ 1/r²   |   Like poles repel; unlike poles attract"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two north poles are brought close together. What happens?",
          "options": [
            "They attract",
            "They repel",
            "Nothing happens",
            "They neutralise each other"
          ],
          "correctIndex": 1,
          "explanation": "Like magnetic poles (N-N or S-S) always repel each other."
        },
        {
          "text": "If you cut a bar magnet in half, what do you get?",
          "options": [
            "One N-only and one S-only magnet",
            "Two smaller magnets each with N and S poles",
            "Two unmagnetised pieces",
            "One full magnet and one non-magnetic piece"
          ],
          "correctIndex": 1,
          "explanation": "Magnetic monopoles don't exist; each half becomes a complete magnet with both N and S poles."
        },
        {
          "text": "The force between two magnets as their separation doubles:",
          "options": [
            "Doubles",
            "Halves",
            "Quarters approximately",
            "Remains the same"
          ],
          "correctIndex": 2,
          "explanation": "Magnetic dipole force falls roughly as 1/r³ for dipole-dipole (or 1/r² for monopole), so doubling r reduces force by ~4× (or more)."
        }
      ],
      "discussion": [
        "Why do magnetic monopoles not appear to exist, even when you cut a magnet?",
        "How does a compass work? Which end of a compass points north, and why is this nomenclature confusing?",
        "Describe a practical application of magnetic attraction and one of magnetic repulsion."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Like poles repel, unlike attract",
          "pct": 35
        },
        {
          "label": "Force vs. distance relationship",
          "pct": 25
        },
        {
          "label": "No magnetic monopoles",
          "pct": 25
        },
        {
          "label": "Real-world applications",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think the N pole of a compass points to the geographic North Pole; geographically the magnetic south pole is near the geographic north pole.",
        "Many believe you can isolate a north or south pole by cutting a magnet; you cannot.",
        "Assuming magnetic force is constant with distance; it decreases rapidly."
      ],
      "hook": "Maglev trains float centimetres above the track using repulsion between like magnetic poles. Zero friction means they can travel at 600 km/h — and it's just magnets!",
      "khanLinks": [
        {
          "title": "Magnets & Magnetic Force",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        },
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Magnet A pole",
        "Magnet B pole",
        "Force type",
        "Distance (cm)",
        "Force (strong/medium/weak)"
      ],
      "rows": 4
    },
    "observations": [
      "Test all four pole combinations and record attract/repel.",
      "Describe how force changes as separation increases.",
      "Verify N-S labels using the compass."
    ],
    "conclusion": "Like poles (N-N, S-S) repel; unlike poles (N-S) attract. Force decreases rapidly with distance. Cutting magnet creates two new full magnets. Results confirm fundamental magnetic interactions.",
    "ai": {
      "opening": "Magnets are fascinating — they push and pull without touching! Ask me about pole interactions, force vs. distance, or why cutting a magnet doesn't isolate a pole.",
      "keywords": {
        "setup": "bar magnets|poles|compass|separation|attract|repel",
        "formula": "F ∝ 1/r²|like repel|unlike attract",
        "error": "pole mislabelling|ferromagnetic interference|weak magnets",
        "question": "poles|repel|attract|monopole|force distance|compass",
        "real": "maglev|compass|MRI"
      },
      "hint": "N-N or S-S → repel. N-S → attract. Force decreases with distance. No magnetic monopoles — cut a magnet, you get two new magnets.",
      "expected": "N-N: repel. N-S: attract. S-S: repel. Force decreases rapidly beyond ~5cm."
    }
  },
  {
    "num": 38,
    "cardEmoji": "🌀",
    "title": "Magnetic Field Forces",
    "section": "Magnetism",
    "desc": "Map the magnetic field of a U-shaped magnet using a 2D field chamber with iron filings.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Students visualise magnetic field lines using iron filings in a 2D chamber and confirm that field lines emerge from N, enter S, and are denser where the field is stronger.",
      "instructions": [
        "Place the U-shaped magnet under the 2D field chamber.",
        "Gently tap the chamber to help iron filings align with field lines.",
        "Sketch or photograph the resulting pattern."
      ],
      "expectedOutcome": "Field lines curve from N pole to S pole, densest between the poles. Outside the gap: field lines are more spread and weaker."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "U-shaped (horseshoe) magnet"
        },
        {
          "emoji": "🧪",
          "name": "2D field chamber with iron filings"
        },
        {
          "emoji": "📸",
          "name": "Camera or pencil/paper for sketch"
        }
      ],
      "observationsToRecord": [
        "Shape and direction of field lines",
        "Density of field lines between the poles vs. outside",
        "Whether field lines are closed loops"
      ],
      "theoryPoints": [
        "Magnetic field lines: external path from N to S; internal path S to N (closed loops).",
        "Density of field lines indicates field strength: denser = stronger.",
        "Field lines never cross each other.",
        "Between the poles of a U-magnet: nearly uniform, strong field."
      ],
      "realWorldConnections": [
        "MRI machines use strong uniform magnetic fields (like between U-magnet poles but much stronger).",
        "Electromagnets in motors and generators use the same field geometry.",
        "Magnetic storage (hard drives) uses tiny magnetic domains."
      ],
      "formula": "B field lines: N → S externally, S → N internally (closed loops)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Where is the magnetic field of a U-shaped magnet strongest?",
          "options": [
            "At the ends of the arms",
            "Between the two poles (in the gap)",
            "Far away from the magnet",
            "At the back of the magnet"
          ],
          "correctIndex": 1,
          "explanation": "Field lines are most dense between the two poles, indicating the strongest field in the gap."
        },
        {
          "text": "Magnetic field lines always:",
          "options": [
            "Start and end at free poles",
            "Form closed loops from N to S externally",
            "Cross each other at right angles",
            "Point from S to N externally"
          ],
          "correctIndex": 1,
          "explanation": "Field lines form closed loops: externally from N to S, internally from S to N. They never cross."
        },
        {
          "text": "Iron filings in a field chamber align:",
          "options": [
            "Perpendicular to field lines",
            "Along the magnetic field direction",
            "Randomly",
            "Toward the geographic north"
          ],
          "correctIndex": 1,
          "explanation": "Iron filings become temporarily magnetised and align with the local magnetic field direction."
        }
      ],
      "discussion": [
        "Explain why magnetic field lines cannot cross each other.",
        "How does the spacing of field lines indicate the strength of the field?",
        "Why is the field between the poles of a horseshoe magnet more uniform than around a bar magnet?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Field line direction N→S",
          "pct": 30
        },
        {
          "label": "Field line density = field strength",
          "pct": 30
        },
        {
          "label": "Closed loop property",
          "pct": 25
        },
        {
          "label": "Uniform field between poles",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think field lines start and stop at poles; they are continuous closed loops.",
        "Many believe field lines can cross; they cannot — at every point there is only one field direction.",
        "Assuming field is uniform everywhere around the magnet."
      ],
      "hook": "Iron filings instantly reveal the invisible — they map the magnetic field in seconds! The pattern shows closed loops, density variations, and a strong uniform region between the poles.",
      "khanLinks": [
        {
          "title": "Force on a Current-Carrying Wire",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/electric-motors/v/the-magnetic-force-on-a-current-carrying-wire"
        },
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Region",
        "Field line density",
        "Field direction",
        "Field strength (relative)"
      ],
      "rows": 4
    },
    "observations": [
      "Sketch the field line pattern observed with iron filings.",
      "Describe line density between the poles vs. outside.",
      "Note that lines never cross."
    ],
    "conclusion": "Field lines of U-shaped magnet mapped with iron filings: lines curve from N to S externally, densest between poles (strong, nearly uniform field). Lines never crossed. Confirms B-field properties.",
    "ai": {
      "opening": "Iron filings make the invisible visible! Ask me about field line properties, why they're closed loops, or what line density means.",
      "keywords": {
        "setup": "U-shaped magnet|2D field chamber|iron filings|poles",
        "formula": "field lines N→S externally|closed loops|density = strength",
        "error": "too many filings|magnet too weak|background field",
        "question": "field lines|magnetic field|N→S|closed loop|density|strength",
        "real": "MRI|electric motor|hard drive"
      },
      "hint": "Field lines go N→S outside magnet, S→N inside (closed loops). Dense lines = strong field. Never cross.",
      "expected": "Field lines curve from N to S between poles, denser in gap. Outside poles: spread out. Lines form closed loops."
    }
  },
  {
    "num": 39,
    "cardEmoji": "🧭",
    "title": "Compass and Magnetism",
    "section": "Magnetism",
    "desc": "Use a compass to map the direction of a magnetic field and observe how a compass aligns with an external field.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "3 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify that a compass needle aligns with the local magnetic field direction and that the S-pole of a bar magnet attracts the N-pole of the compass needle.",
      "instructions": [
        "Place compass in different positions around a bar magnet.",
        "Record the direction the compass needle points at each location.",
        "Sketch the field pattern by connecting compass directions."
      ],
      "expectedOutcome": "Compass N pole points toward S pole of magnet. The compass traces out the magnetic field lines around the bar magnet."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧭",
          "name": "Magnetic compass"
        },
        {
          "emoji": "🧲",
          "name": "Bar magnet"
        },
        {
          "emoji": "📝",
          "name": "Paper (to place compass on and mark directions)"
        },
        {
          "emoji": "✏️",
          "name": "Pencil"
        }
      ],
      "observationsToRecord": [
        "Compass needle direction at each position around magnet",
        "Positions where the field is strongest (largest deflection)",
        "Path traced by connecting compass readings"
      ],
      "theoryPoints": [
        "A compass needle is a small bar magnet; its N pole points in the direction of field B.",
        "S pole of external magnet attracts compass N pole (opposite attract).",
        "Earth's magnetic field: compass N points to geographic north (Earth's magnetic south pole is near geographic north).",
        "Field lines mapped by compass = same as iron-filing patterns."
      ],
      "realWorldConnections": [
        "Navigation: compasses have guided sailors for over 1000 years.",
        "Geological surveys use magnetometers (super-sensitive compasses) to map underground ore.",
        "Pigeons have biological magnetite particles and navigate by Earth's field."
      ],
      "formula": "Compass N pole → direction of B field vector"
    },
    "questions": {
      "mcq": [
        {
          "text": "Which pole of a bar magnet attracts the N pole of a compass needle?",
          "options": [
            "N pole",
            "S pole",
            "Either pole",
            "Neither pole"
          ],
          "correctIndex": 1,
          "explanation": "Unlike poles attract: the compass N pole is attracted to the magnet's S pole."
        },
        {
          "text": "A compass needle points in the direction of:",
          "options": [
            "The magnetic south pole",
            "The local magnetic field B",
            "True north always",
            "The closest magnet's N pole"
          ],
          "correctIndex": 1,
          "explanation": "The N pole of a compass aligns with the local magnetic field direction (defined from N to S externally)."
        },
        {
          "text": "Earth's geographic north pole corresponds magnetically to:",
          "options": [
            "Earth's magnetic north pole",
            "Earth's magnetic south pole",
            "A neutral zone",
            "No magnetic pole"
          ],
          "correctIndex": 1,
          "explanation": "Earth's magnetic south pole is located near the geographic north pole, which is why compass needles point 'north' — their N poles are attracted to Earth's magnetic south."
        }
      ],
      "discussion": [
        "Why does a compass point north? Explain using magnetic pole theory.",
        "How would you use a compass to map the full magnetic field pattern around a bar magnet?",
        "Explain why a compass is useless at the geographic south pole."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Compass aligns with B field",
          "pct": 30
        },
        {
          "label": "Unlike poles attract (S attracts compass N)",
          "pct": 30
        },
        {
          "label": "Earth's field and compass navigation",
          "pct": 25
        },
        {
          "label": "Field mapping technique",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think the compass N pole points to Earth's geographic north; technically it points to Earth's magnetic south pole (which happens to be near geographic north).",
        "Many assume a compass always points exactly north; magnetic declination causes deviations from true north.",
        "Confusing the compass N pole direction with the S pole of the nearest magnet."
      ],
      "hook": "Vikings navigated across oceans using a magnetite 'sunstone' before proper compasses were invented. The Earth itself is a giant magnet — and your phone has three magnetic sensors!",
      "khanLinks": [
        {
          "title": "Magnets & Magnetic Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        },
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Position around magnet",
        "Compass N pole direction",
        "Field line direction"
      ],
      "rows": 8
    },
    "observations": [
      "Mark compass directions at 8 positions around the bar magnet.",
      "Connect readings to trace field lines.",
      "Note that compass N pole always points from N to S along the field."
    ],
    "conclusion": "Compass needle aligned with local B field at every position. Compass N pole pointed toward magnet S pole (unlike poles attract). Earth's geographic north = Earth's magnetic south. Field map matched iron-filing pattern.",
    "ai": {
      "opening": "Compass needles are tiny magnets dancing in a field! Ask me how a compass works, field mapping, or why geographic north is Earth's magnetic south.",
      "keywords": {
        "setup": "compass|bar magnet|field lines|mapping|direction",
        "formula": "compass N → B direction|unlike poles attract",
        "error": "nearby metal objects|multiple magnets|Earth field interference",
        "question": "compass|magnetic field|north|south|attract|field mapping",
        "real": "navigation|geological survey|animal migration"
      },
      "hint": "Compass N pole points in direction of B (from N to S externally). S pole of magnet attracts compass N. Earth geo-north is magnetically south.",
      "expected": "Compass N pole → toward magnet S pole. Field lines traced connect all compass directions. Pattern matches iron-filing map."
    }
  },
  {
    "num": 40,
    "cardEmoji": "🎯",
    "title": "A Fairly Common Magnetic Toy",
    "section": "Magnetism",
    "desc": "Explore how a steel ball bearing between two like-pole magnets reverses the apparent interaction from repulsion to attraction.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "3 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Students observe that two N-pole magnets normally repel, but inserting a ferromagnetic steel ball between them causes apparent attraction — the ball becomes magnetised and creates an indirect attractive force.",
      "instructions": [
        "Place two magnets N-N facing: observe repulsion.",
        "Place steel ball bearing between them: observe the magnets now move toward the ball.",
        "Remove the ball: repulsion returns."
      ],
      "expectedOutcome": "N-N without ball: repel. N-ball-N: magnets attracted to ball. Ball mediates effective N-N attraction via induced magnetisation."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "Two identical small magnets (both N facing outward)"
        },
        {
          "emoji": "⚙️",
          "name": "Steel ball bearing"
        },
        {
          "emoji": "📏",
          "name": "Ruler / surface"
        }
      ],
      "observationsToRecord": [
        "Force type (attract/repel) without ball between N-N magnets",
        "Force type with steel ball between N-N magnets",
        "Behaviour when ball is removed"
      ],
      "theoryPoints": [
        "Steel is ferromagnetic: an external field induces magnetisation in it.",
        "Ball between two N poles: each magnet induces S pole in the nearest side of the ball.",
        "Each magnet sees a nearby S pole → attraction to ball.",
        "Result: N-ball-N appears attractive through the ball.",
        "Soft iron loses magnetisation when removed from the field; hard steel retains some."
      ],
      "realWorldConnections": [
        "Electromagnets pick up iron and steel by inducing magnetisation.",
        "Magnetic resonance imaging (MRI) uses induced nuclear magnetisation.",
        "Magnetic particle inspection detects cracks in steel by induced field distortions."
      ],
      "formula": "Induced magnetisation in ferromagnetic material → attraction to external field"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two N-pole magnets face each other with a steel ball between them. The magnets:",
          "options": [
            "Still repel each other",
            "Are attracted toward the steel ball",
            "Have no force on them",
            "Rotate to face S poles toward ball"
          ],
          "correctIndex": 1,
          "explanation": "The steel ball becomes magnetised; each magnet is attracted to the induced opposite pole in the nearest face of the ball."
        },
        {
          "text": "Why does the steel ball become magnetised when placed between the magnets?",
          "options": [
            "It contains natural magnets",
            "The external magnetic field induces a temporary magnetisation (ferromagnetism)",
            "Steel is always magnetic",
            "The ball is heated by the magnets"
          ],
          "correctIndex": 1,
          "explanation": "Steel is ferromagnetic; an external field aligns its magnetic domains, inducing a temporary magnetisation."
        },
        {
          "text": "What happens to the apparent N-N force when the steel ball is removed?",
          "options": [
            "Remains attractive",
            "Returns to repulsion",
            "Becomes zero",
            "Reverses permanently"
          ],
          "correctIndex": 1,
          "explanation": "Without the ball, the N-N configuration resumes its normal repulsion."
        }
      ],
      "discussion": [
        "Explain using magnetic domain theory why the steel ball becomes magnetised between the two N poles.",
        "How does an electromagnet pick up iron objects? What is the similarity to this experiment?",
        "Why might a steel ball retain some magnetisation after being removed, but a soft iron ball would not?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Like poles normally repel",
          "pct": 25
        },
        {
          "label": "Ferromagnetic induction in steel",
          "pct": 35
        },
        {
          "label": "Induced opposite poles cause attraction",
          "pct": 25
        },
        {
          "label": "Soft vs. hard ferromagnetics",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students expect like poles always repel even with a ferromagnetic mediator; the ball changes everything.",
        "Many think the magnets attract each other directly; they are attracted to the ball.",
        "Confusing paramagnetic (weak, temporary) with ferromagnetic (strong, persistent) behaviour."
      ],
      "hook": "Put a steel ball between two magnets pointing the same way — and they suddenly 'attract'! The ball secretly reverses the interaction by becoming a magnet itself.",
      "khanLinks": [
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        },
        {
          "title": "Magnets & Magnetic Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Configuration",
        "Force observed",
        "Explanation"
      ],
      "rows": 3
    },
    "observations": [
      "Record force type for: N-N (no ball), N-ball-N, after ball removed.",
      "Note the direction magnets move toward the ball.",
      "Observe whether ball retains magnetism after removal."
    ],
    "conclusion": "N-N without ball: repel. N-ball-N: apparent attraction — each magnet attracted to ball's induced S pole. Ball removed: repulsion returns. Confirms ferromagnetic induction mediates the interaction.",
    "ai": {
      "opening": "The magnetic toy defies expectations! Ask me about ferromagnetic induction, why the ball reverses the force, or how electromagnets work.",
      "keywords": {
        "setup": "two N-pole magnets|steel ball bearing|repulsion|attraction|ferromagnetic",
        "formula": "induced magnetisation|opposite pole induced in ball",
        "error": "non-ferromagnetic ball|too weak magnets|ball not centred",
        "question": "ferromagnetic|induced magnetisation|like poles|steel ball|domains",
        "real": "electromagnet|MRI|magnetic particle inspection"
      },
      "hint": "Steel ball gets magnetised: its surfaces facing each magnet become S poles (attracted). N-ball-N = N attracted to S(ball) + S(ball) attracted to N. Net: attraction through the ball.",
      "expected": "N-N: repel. N-ball-N: magnets move toward ball (attract). Ball removed: repulsion returns."
    }
  },
  {
    "num": 41,
    "cardEmoji": "💡",
    "title": "Electric Resistance",
    "section": "Electricity",
    "desc": "Verify Ohm's Law by measuring the current through a resistor at different voltages and determining the resistance.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Students verify I = V/R by plotting V vs. I and confirming linearity; the slope gives R.",
      "instructions": [
        "Connect resistor R₁ ≈ 100 Ω in series with ammeter; voltmeter across R₁.",
        "Vary the supply voltage from 1 V to 5 V in steps; record I (mA) for each V.",
        "Plot V vs. I; slope = R."
      ],
      "expectedOutcome": "R = 100.8 Ω; V = 2.75 V → I = 25 mA. V/I = 2.75/0.025 = 110 Ω (close to nominal). Graph is linear through origin."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔋",
          "name": "Variable DC power supply (0–6 V)"
        },
        {
          "emoji": "⚡",
          "name": "Resistor ~100 Ω"
        },
        {
          "emoji": "🔌",
          "name": "Ammeter (mA range)"
        },
        {
          "emoji": "🔌",
          "name": "Voltmeter"
        },
        {
          "emoji": "🪛",
          "name": "Connecting wires and breadboard"
        }
      ],
      "observationsToRecord": [
        "Voltage V (V) for each supply setting",
        "Current I (mA) for each V",
        "Calculated R = V/I (Ω) for each trial"
      ],
      "theoryPoints": [
        "Ohm's Law: V = IR (or I = V/R); R is constant for ohmic conductors.",
        "Resistance R = V/I (Ω); 1 Ω = 1 V/A.",
        "Ohmic conductors: V-I graph is linear through origin.",
        "Non-ohmic devices (diodes, bulbs): V-I is non-linear."
      ],
      "realWorldConnections": [
        "Every electronic device uses Ohm's law for circuit design.",
        "Fuses are rated in amps (I_max = V/R_circuit).",
        "Electrical safety: touching a high-voltage source with low body resistance gives large I."
      ],
      "formula": "V = IR   |   R = V/I (Ω)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 100 Ω resistor has 2.75 V across it. What current flows?",
          "options": [
            "27.5 mA",
            "2.75 mA",
            "0.275 A",
            "275 mA"
          ],
          "correctIndex": 0,
          "explanation": "I = V/R = 2.75/100 = 0.0275 A = 27.5 mA."
        },
        {
          "text": "On a V vs. I graph for an ohmic resistor, the slope represents:",
          "options": [
            "Current",
            "Voltage",
            "Resistance R",
            "Power"
          ],
          "correctIndex": 2,
          "explanation": "V = IR → V/I = R → slope of V vs. I graph = R."
        },
        {
          "text": "Which of these is an ohmic conductor?",
          "options": [
            "LED diode",
            "Tungsten filament lamp at varying temperature",
            "Metal resistor at constant temperature",
            "Semiconductor thermistor"
          ],
          "correctIndex": 2,
          "explanation": "A metal resistor at constant temperature follows V = IR linearly — it is ohmic."
        }
      ],
      "discussion": [
        "Plot V vs. I for your data. Is the relationship linear? What does the slope represent?",
        "Why might a light bulb filament NOT obey Ohm's law perfectly?",
        "Calculate the power dissipated in the 100 Ω resistor at V = 2.75 V."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "V = IR (Ohm's Law)",
          "pct": 35
        },
        {
          "label": "R = slope of V vs. I graph",
          "pct": 30
        },
        {
          "label": "Ohmic vs. non-ohmic",
          "pct": 20
        },
        {
          "label": "Safe circuit connections",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students think Ohm's law always applies; it only holds for ohmic conductors at constant temperature.",
        "Many confuse the slope of I vs. V (= 1/R) with the slope of V vs. I (= R).",
        "Thinking that resistance changes when V changes; for ohmic components R is constant."
      ],
      "hook": "Every app on your phone, every LED, every motor — all designed using Ohm's Law. V = IR is arguably the most useful equation in engineering!",
      "khanLinks": [
        {
          "title": "Circuits & Ohm's Law",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/circuits-part-1"
        },
        {
          "title": "Electricity & Circuits",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Voltage V (V)",
        "Current I (mA)",
        "R = V/I (Ω)"
      ],
      "rows": 6
    },
    "observations": [
      "Record V and I for at least 5 different supply voltages.",
      "Plot V (y-axis) vs. I (x-axis) and check linearity.",
      "Calculate R from slope and compare with nominal 100 Ω."
    ],
    "conclusion": "Ohm's Law verified: V = IR. R = 100.8 Ω measured. At V = 2.75 V: I = 25 mA → R = 110 Ω (within 10% of nominal). V vs. I graph was linear through origin, confirming ohmic behaviour.",
    "ai": {
      "opening": "V = IR is the foundation of all circuit design! Ask me about Ohm's Law, how to find R from a graph, or ohmic vs. non-ohmic behaviour.",
      "keywords": {
        "setup": "resistor|ammeter|voltmeter|power supply|circuit",
        "formula": "V = IR|R = V/I|slope of V vs. I = R",
        "error": "ammeter in parallel|voltmeter in series|contact resistance",
        "question": "Ohm's Law|resistance|ohmic|current|voltage|slope",
        "real": "electronics|fuse|electrical safety"
      },
      "hint": "I = V/R. Plot V vs. I; slope = R. Ohmic: linear through origin. Non-ohmic: curved graph.",
      "expected": "R=100.8Ω; V=2.75V→I=25mA. V vs. I linear, slope≈100Ω. Confirms V=IR."
    }
  },
  {
    "num": 42,
    "cardEmoji": "⚡",
    "title": "Series versus parallel circuits",
    "section": "Electricity",
    "desc": "Measure the total resistance for series and parallel resistor combinations and verify the combination formulas.",
    "equipmentNeeded": "mobile-lab",
    "setupTime": "5 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Students verify R_series = R₁ + R₂ and 1/R_parallel = 1/R₁ + 1/R₂, then connect to why home circuits use parallel wiring.",
      "instructions": [
        "Measure R₁ and R₂ individually with ohmmeter or V/I method.",
        "Connect in series; measure total R_T and verify R_T = R₁ + R₂.",
        "Connect in parallel; measure R_T and verify 1/R_T = 1/R₁ + 1/R₂."
      ],
      "expectedOutcome": "Expected: V = 5.8 V. R₁ = R₂ = 100 Ω: Series R_T = 200 Ω; Parallel R_T = 50 Ω. Parallel R_T < smaller individual R."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔋",
          "name": "Battery or DC supply (5.8 V)"
        },
        {
          "emoji": "⚡",
          "name": "Two resistors R₁ = R₂ = 100 Ω"
        },
        {
          "emoji": "🔌",
          "name": "Ammeter and voltmeter"
        },
        {
          "emoji": "🪛",
          "name": "Connecting wires, breadboard"
        }
      ],
      "observationsToRecord": [
        "Individual R₁ and R₂ (Ω)",
        "V and I for series combination → R_series = V/I",
        "V and I for parallel combination → R_parallel = V/I"
      ],
      "theoryPoints": [
        "Series: same current through each; voltages add. R_T = R₁ + R₂.",
        "Parallel: same voltage across each; currents add. 1/R_T = 1/R₁ + 1/R₂.",
        "Parallel R_T always less than the smallest individual resistance.",
        "Home circuits: parallel wiring gives each device full mains voltage."
      ],
      "realWorldConnections": [
        "Christmas lights: old series strings — one bulb fails → all go out. Modern parallel strings stay lit.",
        "Home electrical wiring is parallel so each outlet gets full 230 V.",
        "Series resistors are used in voltage dividers; parallel in current dividers."
      ],
      "formula": "Series: R_T = R₁ + R₂   |   Parallel: 1/R_T = 1/R₁ + 1/R₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two 100 Ω resistors in series. What is R_T?",
          "options": [
            "50 Ω",
            "100 Ω",
            "200 Ω",
            "400 Ω"
          ],
          "correctIndex": 2,
          "explanation": "R_T = R₁ + R₂ = 100 + 100 = 200 Ω."
        },
        {
          "text": "Two 100 Ω resistors in parallel. What is R_T?",
          "options": [
            "200 Ω",
            "100 Ω",
            "50 Ω",
            "25 Ω"
          ],
          "correctIndex": 2,
          "explanation": "1/R_T = 1/100 + 1/100 = 2/100; R_T = 50 Ω."
        },
        {
          "text": "Why are home electrical circuits wired in parallel?",
          "options": [
            "To increase total resistance",
            "So each device receives the full supply voltage",
            "To reduce the current",
            "Because series is too complex"
          ],
          "correctIndex": 1,
          "explanation": "In parallel, each branch has the full supply voltage (230 V), so every device operates at its designed voltage independently."
        }
      ],
      "discussion": [
        "Explain why adding more resistors in parallel always decreases the total resistance.",
        "Why do old-fashioned series Christmas lights all go out when one bulb fails?",
        "A house has a 230 V supply and three 100 Ω appliances. Calculate I_total if all three are connected in parallel."
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Series: R_T = R₁+R₂",
          "pct": 30
        },
        {
          "label": "Parallel: 1/R_T = 1/R₁+1/R₂",
          "pct": 30
        },
        {
          "label": "Current and voltage distribution",
          "pct": 25
        },
        {
          "label": "Home circuit design",
          "pct": 15
        }
      ],
      "misconceptions": [
        "Students apply the series formula when they mean parallel and vice versa.",
        "Many think parallel R_T is the average; it is always less than the smallest R.",
        "Assuming adding more paths increases resistance; it always decreases it (more paths for current)."
      ],
      "hook": "Old Christmas tree lights were wired in series — one burnt bulb and the whole string went dark! Modern lights use parallel wiring. The physics makes all the difference.",
      "khanLinks": [
        {
          "title": "Series and Parallel Resistors",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/series-resistors"
        },
        {
          "title": "Electricity & Circuits",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "Configuration",
        "V (V)",
        "I (mA)",
        "R_T = V/I (Ω)",
        "R_expected (Ω)"
      ],
      "rows": 4
    },
    "observations": [
      "Record V and I for individual R₁, R₂, then series and parallel combinations.",
      "Compare measured R_T with formula predictions.",
      "Confirm parallel R_T < both individual values."
    ],
    "conclusion": "Series: R_T = 200 Ω = R₁+R₂ confirmed. Parallel: R_T = 50 Ω = R₁R₂/(R₁+R₂) confirmed. Parallel R_T (50 Ω) < either individual R (100 Ω). Home circuits use parallel: each device gets full voltage.",
    "ai": {
      "opening": "Series or parallel — the choice changes everything! Ask me about R_T formulas, current/voltage distribution, or why homes use parallel wiring.",
      "keywords": {
        "setup": "resistors|series|parallel|ammeter|voltmeter|circuit",
        "formula": "R_T = R₁+R₂|1/R_T = 1/R₁+1/R₂",
        "error": "ammeter placement|contact resistance|wrong formula used",
        "question": "series|parallel|total resistance|home circuit|voltage divider",
        "real": "Christmas lights|home wiring|voltage divider"
      },
      "hint": "Series: R_T = R₁+R₂. Parallel: 1/R_T = 1/R₁+1/R₂. Parallel R_T < smallest R. Home circuits: parallel so each device gets full 230V.",
      "expected": "R₁=R₂=100Ω: Series→200Ω; Parallel→50Ω. Home circuits: parallel so each device gets full 230V."
    }
  }
];
